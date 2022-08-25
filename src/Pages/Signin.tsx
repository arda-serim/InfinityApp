

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
import { addParent } from '../contract/functions';
import LangContext, { langs } from './LangugeContext';
import { Typography, Layout, Row, Col, Input, Checkbox, Button } from 'antd';
import { ML } from '../App';
import Navbar from '../Components/Navbar';

declare var window: any;

const { Title } = Typography;

const contentStyle = {
  background: 'rgba(0,0,0,0)',
  width: '100%',
  height: '100%',
};

const navbarStyle = {
  display: 'flex',
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
  let rememberMe = false;
  let navigate = useNavigate();
  let users = [{ name: "", surname: "", role: "", balance: "", address: "", children: [{ name: "", surname: "", role: "", balance: "", address: "", age: "", receivalDate: "" }] }];
  const [balance, setBalance] = useState("");
  const [lang, setLang] = useState(langs.tr)
  const [selectedLanguage, setSelectedLanguage] = useState("tr")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")

  const switchLang = () => {
    setSelectedLanguage(selectedLanguage === "tr" ? "en" : "tr");
    lang === langs.tr ? setLang(langs.en) : setLang(langs.tr)
  }

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



  }
    , []);

  async function OnSignIn() {

    await addParent(name, surname);

    if (name === "" || surname === "") {
      alert("Please fill all the fields")
    }
    else {
      // getBalance(sessionStorage.getItem('address'));

      let adrs = sessionStorage.getItem('address');
      if (adrs === null) {
        adrs = "";
      }
      const user = {
        name: name,
        surname: surname,
        role: 'parent',
        balance: balance,
        address: adrs,
        children: []
      }
      sessionStorage.removeItem('address');
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(user));

      }
      else {
        sessionStorage.setItem("user", JSON.stringify(user));
      }


      let usrs = localStorage.getItem("users");

      if (usrs) {
        users = JSON.parse(usrs);
      }
      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));


      if (user.role === 'parent') {
        window.location.href = "/parent";
      }
      else if (user.role === 'child') {
        window.location.href = "/childScreen";
      }

    }
  };


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  };

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value)
  };

  return (

      <Layout style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(' + bg + ')',
      }}>
        <Header style={navbarStyle}>
          <Navbar/>
        </Header >
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
                  <div style={whitePlaceStyle}>
                    <Title level={5} style={{ color: '#0A103A', marginRight: '160px' }}>{ML('hosgeldin')}</Title>
                  </div>
                  <br>
                  </br>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Title level={2} style={{ color: '#0A103A', marginRight: '230px' }}>{ML('ad')}</Title>
                  </div>
                  <div style={whitePlaceStyle}>
                    <Input style={inputStyle} type='text' name={ML('ad').props.children} value={name} onChange={handleNameChange} />
                  </div>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Title level={2} style={{ color: '#0A103A', marginRight: '200px' }}>{ML('soyad')}</Title>
                  </div>
                  <div style={whitePlaceStyle}>
                    <Input style={inputStyle} type='text' name={ML('soyad').props.children} value={surname} onChange={handleSurnameChange} />
                  </div>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Checkbox onChange={onChange} style={{ marginRight: '170px' }} >{ML('checkbox')}</Checkbox>
                  </div>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Button onClick={OnSignIn} size="large" style={signInButtonStyle} shape='round'>
                      {ML('kayıtol')}</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
        </div>
      </Layout>
  );
}

export default Signin;
