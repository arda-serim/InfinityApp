

import React from 'react';

import { useState } from 'react';
import signinpng from '../images/signin.png';
import bg from '../images/bg.png';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import logo from '../images/logo_infinity.png';


import { LoginOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

import userEvent from '@testing-library/user-event';

import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import { addParent, getRole } from '../contract/functions';
import LangContext, { langs } from './LangugeContext';
import { Typography, Layout, Row, Col, Input, Checkbox, Button, Spin, Form } from 'antd';
import { ML } from '../App';
import Navbar from '../Components/Navbar';
import CustomModal from '../Components/CustomModal';

declare var window: any;

const { Title } = Typography;

const contentStyle = {
  background: 'rgba(0,0,0,0)',
  width: '100%',
  height: '100%',
};

const navbarStyle = {
  flexDirection: 'row',
  height: '10%',
  background: 'rgba(0,0,0,0)',
} as React.CSSProperties;

const colStyle = {
  background: 'rgba(0,0,0,0)',
  padding: 24,
  minHeight: 850
};

const imageStyle = {
  width: '600px',
  height: '600px',
  borderRadius: '15px',
  marginLeft: '120px',
  marginTop: '50px',
};

const inputStyle = {
  borderRadius: '15px',
  width: '350px',
  height: '40px',
  color: 'black',
  border: `2px solid purple`,
};

const signInButtonStyle = {
  width: '350px',
  height: '40px',
  background: 'linear-gradient(180deg, #FF980E 41.67%, #FDB137 100%)',
  color: '#fff',
  border: 'none',
};

const whitePlaceStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginLeft: '220'
};

const titleStyle = {
  color: '#fff',
  paddingTop: '.5%',
};

const logoStyle = {
  width: '86px',
  height: '71px',
  marginLeft: '1%',
  marginTop: '.5%',
  marginBottom: '.5%'
};




const { Header, Content } = Layout;

const Signin = () => {
  const [form] = Form.useForm();
  let rememberMe = false;
  let navigate = useNavigate();
  let users = [{ name: "", surname: "", role: "", balance: "", address: "", children: [{ name: "", surname: "", role: "", balance: "", address: "", age: "", receivalDate: "" }] }];
  const [balance, setBalance] = useState("");
  const [lang, setLang] = useState(langs.tr)
  const [selectedLanguage, setSelectedLanguage] = useState("tr")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")

  const [error, setError] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  // const switchLang = () => {
  //   setSelectedLanguage(selectedLanguage === "tr" ? "en" : "tr");
  //   lang === langs.tr ? setLang(langs.en) : setLang(langs.tr)
  // }

  const onChange = (e: CheckboxChangeEvent) => {
    rememberMe = !rememberMe;
  };

  React.useEffect(() => {
    // window.ethereum.request({
    //   method: 'eth_getBalance',
    //   params: [sessionStorage.getItem('address'), 'latest'],
    // }).then((blnce: any) => {
    //   setBalance(ethers.utils.formatEther(blnce));
    // }
    // );

    const roleFunc = async() => {
      const role = await getRole();
      if (role === 'admin') {
         navigate('/admin');
      } else if (role === 'parent') {
         navigate('/parent');
      } else if(role !== 'none') {
         navigate('/');
      }
   }

   roleFunc();

  }
    , []);

  async function OnSignIn() {



    try {
      setIsLoading(true);
      await addParent(name, surname);
      setIsLoading(false);
      localStorage.setItem('role', "parent");
      navigate('/parent');
    }
    catch (error: any) {
      const activeLanguage = localStorage.getItem("i18nextLng");
      const errorMessage = (error.reason.split(":"))[1]
      const messageEN = errorMessage.split("TR")[0]
      const messageTR = errorMessage.split("TR")[1]

      if (activeLanguage === 'en') {
        setError(messageEN)
      } else {
        setError(messageTR)
      }
      setIsLoading(false);
    }
  };


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  };

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value)
  };

  const clearError = () => {
    //@ts-ignore
    setError('');
  }

  const onFinish = () => {
    console.log("deneme")
    OnSignIn()
  };

  return (
    <body className="signin">
      <>

        {
          isLoading && <CustomModal show header={ML('loading')} footer={<Spin />}>
            <div>
              <span style={{ margin: '16px' }}>
                {ML('addingParent')}
              </span>

            </div>
          </CustomModal>
        }
        {
          error && <CustomModal show header={ML('errorOccured')} btnShow={true} onClear={clearError}>
            <span style={{ margin: '16px' }}>
              {error}
            </span>
          </CustomModal>
        }
        <Layout style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(' + bg + ')',
        }}>
          <Navbar />
          <div style={contentStyle}>
            <Content>
              <div style={colStyle}>
                <Row gutter={[16, 8]}>
                  <Col span={12}>
                    <img src={signinpng} style={imageStyle} />
                  </Col>
                  <Col span={12}>
                    <br>
                    </br>
                    <div style={whitePlaceStyle}>
                      <Title style={{
                        color: '#0A103A', marginTop: '25'
                      }}>{ML('giris')}</Title>
                    </div>
                    <br>
                    </br>
                    <div style={whitePlaceStyle}>
                      <Title level={2} style={{ color: '#0A103A', marginRight: '230px' }}>{ML('ad')}</Title>
                    </div>
                    <Form
                      form={form}
                      onFinish={onFinish}
                      labelCol={{
                        span: 8,
                      }}
                      wrapperCol={{
                        span: 16,
                      }}
                    >
                      <div style={whitePlaceStyle}>
                        <Form.Item
                          name="Name"
                          rules={[{ required: true, message: ML('input5'), whitespace: true }]}
                        >
                          <Input style={inputStyle} type='text' placeholder={ML('ad').props.children} value={name} onChange={handleNameChange} />
                        </Form.Item>
                      </div>
                      <br>
                      </br>
                      <div style={whitePlaceStyle}>
                        <Title level={2} style={{ color: '#0A103A', marginRight: '200px' }}>{ML('soyad')}</Title>
                      </div>
                      <div style={whitePlaceStyle}>
                        <Form.Item
                          name="surname"
                          rules={[{ required: true, message: ML('input6'), whitespace: true }]}
                        >
                          <Input style={inputStyle} type='text' placeholder={ML('soyad').props.children} value={surname} onChange={handleSurnameChange} />
                        </Form.Item>
                      </div>
                      <br>
                      </br>

                      <br>
                      </br>
                      <div style={whitePlaceStyle}>
                        <Button size="large" style={signInButtonStyle} shape='round' type="primary" htmlType="submit">
                          {ML('kayıtol')}</Button>
                      </div>
                    </Form>
                  </Col>
                </Row>
              </div>
            </Content>
          </div>
        </Layout>
      </>
    </body>
  );
}

export default Signin;
