import Navbar from '../Components/NavbarChildPage';
import React from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Col, Row, Slider, Spin, Form, Select } from 'antd';
import { useState } from 'react';
import { Button, Image, Space, Empty, Input, Radio, } from 'antd';
import logo from '../images/logo_infinity.png';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useNavigate } from 'react-router-dom';
// import vector from '../images/Vector.png';
import edit from '../images/editfoto.png';
import { addChild, withdrawMoneyByChild } from '../contract/functions';
import { ML } from '../App';
import CustomModal from '../Components/CustomModal';




//localStorage.setItem('user2' , 'parent')
//localStorage.setItem('user' , 'child2')

const inputStyle = {
  borderRadius: '15px',
  width: '350px',
  height: '40px',
  background: 'rgba(0,0,0,0)',
  color: 'white',
  marginLeft: '230px',
  marginTop: '10%'
};

const contentStyle = {
  witdh: '100%',
  height: '100%',
  minHeight: '700px'
};

const logoStyle = {
  width: '250px',
  height: '250px',
  display: 'flex',
  marginLeft: '220px',
  marginTop: '100px',
};

const buttonStyle = {
  background: 'linear-gradient(180deg, #FF980E 41.67%, #FDB137 100%)',
  border: 'none',
  borderRadius: '15px',
  width: '150px',
  height: '40px',
  margin: '10px'
};
const buttonStyle1 = {
  background: 'linear-gradient(180deg, red 41.67%, #FDB137 100%)',
  border: 'none',
  borderRadius: '15px',
  width: '150px',
  height: '40px',
  margin: '10px'
};

const fotoStyle = {
  marginLeft: '200px',
  marginTop: '50px'
};

const imageStyle = {
  width: '600px',
  height: '600px',
  borderRadius: '15px',
  marginRight: '50px',
  marginTop: '',
};

function Childedit() {

  let navigate = useNavigate();


  React.useEffect(() => {
    if (
      localStorage.getItem('role') !== 'parent'
    ) {
      navigate("/");
    }
  }, []);

  const [form] = Form.useForm();

  const [size, setSize] = useState<SizeType>('large');

  //@ts-ignore
  const [name, setName] = useState();
  const [releaseTime, setReleaseTime] = useState();
  const [address, setAddress] = useState();

  const [amountInputToWithdrawFromChild, setAmountInputToWithdrawFromChild] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();



  const cancelAddingChildHandler = () => {
    navigate('/parent');
  }
  const clearError = () => {
    //@ts-ignore
    setError();
  }
  const onFinish = () => {
    addChildHandler()
  };

  const addChildHandler = async () => {
    // @ts-ignore
    const date = new Date(releaseTime);

    // @ts-ignore
    const releaseTimeInSeconds = Math.floor(date.getTime() / 1000);

    try {
      setIsLoading(true);
      await addChild(name, releaseTimeInSeconds, address);
      setIsLoading(false);
      navigate("/parent");
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
  }
  return (
    <Layout style={{ background: 'linear-gradient(179.94deg, #0A368B 50.02%, #3B82A0 99.95%)' }}>
      {
        isLoading && <CustomModal show header={ML('loading')} footer={<Spin />}>
          <div>
            <span style={{ margin: '16px' }}>
              {ML('childAdding')}
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
      <div>
        <Navbar />
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
        <div style={contentStyle}>
          <Content>
            <div>
              <Row gutter={[16, 8]}>
                <div>
                  <Col span={12}>
                    <div style={fotoStyle}>
                      <img src={edit} alt="edit" style={{ width: '530px', height: '400px' }} />
                    </div>
                  </Col>
                </div>
                <div>
                  <Col span={12}>
                    <div style={{ marginTop: '30%' }} >
                      <Form.Item
                        name="Name"
                        rules={[{ required: true, message: ML('input1') }]}
                      >
                        <Input style={inputStyle} placeholder={ML('ad').props.children} onChange={(e: any) => setName(e.target.value)} />
                      </Form.Item>
                    </div>
                    <div >
                      <Form.Item name="date-picker" rules={[{ required: true, message: ML('input2') }]}>
                        <Input style={inputStyle} placeholder={ML('erisimTarihi').props.children} type="date" onChange={(e: any) => setReleaseTime(e.target.value)} />
                      </Form.Item>
                    </div>
                    <div >
                      <Form.Item
                        name="wallet adress"
                        rules={[
                          { required: true, message: ML('input3') },
                          { min: 42, message: ML('input4') }
                        ]}
                      >
                        <Input style={inputStyle} placeholder={ML('walletAdres').props.children} onChange={(e: any) => setAddress(e.target.value)} />
                      </Form.Item>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '270px', marginTop: "7%" }}>
                      <Button style={buttonStyle1} type="primary" shape="round" size={size} onClick={cancelAddingChildHandler}>
                        {ML('vazgec')}
                      </Button>
                      <Form.Item>
                        <Button style={buttonStyle} type="primary" htmlType="submit" shape="round" size={size} >
                          {ML('kaydet')}
                        </Button>
                      </Form.Item>
                    </div>

                  </Col>
                </div>
              </Row>
            </div>
          </Content>
        </div>
      </Form>
    </Layout>
  );
}

export default Childedit;