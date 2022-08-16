import { Layout  , Card , Typography} from 'antd';
import React from 'react';
import Navbar from '../Components/Navbar';
import { Col, Row, Slider } from 'antd';
import { useState } from 'react';
import signinpng from '../images/signin.png';
import background from '../images/background2.png';
import { url } from 'inspector';
import { Input } from 'antd';

const { Title } = Typography;

const contentStyle ={
  background: 'rgba(0,0,0,0)',
  width: '100%',
  height: '100%',
};

const navbarStyle ={
  background: 'rgba(0,0,0,0)',
};

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
   marginTop: '150px',
  marginLeft: '250px',
  background: '#0A103A', 
  color : 'white'
};

const inputStyle2 = {
    borderRadius: '15px', 
    width: '350px',
    height: '40px',
    //  marginTop : '-25 px',
    marginLeft: '250px',
    background: '#0A103A', 
    color : 'white'
  };


const { Header, Footer, Sider, Content } = Layout;

function Signin(){
  return(

    <Layout style={{ backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage :'url('+background+')',
      }}>

      <div style={{background: 'rgba(0,0,0,0)'}}>
        <Navbar/>
      </div>
        <div style={contentStyle}>
          <Content>
            <div style={colStyle}>
              <Row gutter={[2, 16]}>
                <Col span={12}>
                  <img src={signinpng} style={imageStyle}/>
                </Col>
                <Col span={12}> 
               
                  <div >
                  <Title style = {{textAlign : 'center'}}>
                  Name
                </Title >
                    <Input style={inputStyle} placeholder="Basic usage"/>
                  </div>  

                  <div >
                  <Title style = {{textAlign : 'center'}}>
                  Surname
                </Title >
                    <Input style={inputStyle2} placeholder="Basic usage"/>
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