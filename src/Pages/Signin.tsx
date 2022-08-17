import { Layout  , Card, Checkbox, Button} from 'antd';
import React from 'react';
import Navbar from '../Components/Navbar';
import { Col, Row, Slider } from 'antd';
import { useState } from 'react';
import signinpng from '../images/signin.png';
import background from '../images/background2.png';
import { url } from 'inspector';
import { Input, Typography } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import logo from '../images/logo_infinity.png';

const { Title } = Typography;

const contentStyle ={
  background: 'rgba(0,0,0,0)',
  width: '100%',
  height: '100%',
};

const navbarStyle ={
  display: 'flex',
  flexDirection: 'row',
  height: '10%',
  background: 'rgba(0,0,0,0)',
}as React.CSSProperties;

const colStyle ={
  background: 'rgba(0,0,0,0)',
  padding: 24,
  minHeight: 650
}

const imageStyle = {
  width: '500px',
  height: '500px',
  borderRadius: '15px',
  marginRight: '50px',
  marginTop: '',
};

const cardStyle = {
  width: '800px',
  height: '800px',
  borderRadius: '1500px',
  marginLeft: '150px',
  marginTop: '-25px',

};

const inputStyle = {
  borderRadius: '15px', 
  width: '350px',
  height: '40px',
  background: '#0A103A', 
  color : 'white'
};

const signInButtonStyle = {
  width: '350px',
  height: '40px',
  background: 'linear-gradient( #327FA3 , #1D1B65)',
  color: '#fff',
  border: 'none',
};

const whitePlaceStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginLeft:'220'
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


const onChange = (e: CheckboxChangeEvent) => {
  console.log(`checked = ${e.target.checked}`);
};


const { Header, Footer, Sider, Content } = Layout;

function Signin(){
  return(

    <Layout style={{ backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage :'url('+background+')',
      }}>
      <Header style={navbarStyle}>
         <img src={logo} alt="logo" style={logoStyle} />
         <h1 style={titleStyle}>Infinity</h1>

      </Header >
        <div style={contentStyle}>
          <Content>
            <div style={colStyle}>
              <Row gutter={[16, 8]}>
                <Col span={12}>
                  <img src={signinpng} style={imageStyle}/>
                </Col>
                <Col span={12}>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Title style={{color: '#0A103A', marginTop:'25'
                    }}>LET'S YOU SIGN IN</Title>
                   </div>
                   <div style={whitePlaceStyle}> 
                    <Title level={5} style={{color: '#0A103A', marginRight: '160px'}}>Welcome to our page</Title>
                  </div>
                  <br>
                  </br>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Title level ={2} style={{color: '#0A103A', marginRight: '230px'}}>Name</Title>,
                  </div>
                  <div style={whitePlaceStyle}>
                    <Input style={inputStyle}/>
                  </div>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Title level ={2} style={{color: '#0A103A',  marginRight: '200px'}}>Surname</Title>
                  </div>
                  <div style={whitePlaceStyle}>
                    <Input style={inputStyle}/>
                  </div> 
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Checkbox onChange={onChange} style={{marginRight: '170px'}} >Keep me logged in</Checkbox>;
                  </div>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Button size="large" style={signInButtonStyle} shape='round'>
                    Sıgn In</Button>
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