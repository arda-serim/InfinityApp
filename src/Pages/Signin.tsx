
import { Layout  , Card, Checkbox, Button,Radio , Typography , Input, AutoComplete} from 'antd';
import React from 'react';
import Navbar from '../Components/Navbar';
import { Col, Row, Slider } from 'antd';
import { useState } from 'react';
import signinpng from '../images/signin.png';
import bg from '../images/bg2.png';
import { url } from 'inspector';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import logo from '../images/logo_infinity.png';
import { LoginOutlined  } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import LangContext, {langs} from './LangContext';



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
  minHeight: 850
};

const imageStyle = {
  width: '600px',
  height: '600px',
  borderRadius: '15px',
  marginLeft: '120px',
  marginTop: '50px'
};

const inputStyle = {
  borderRadius: '15px',
  width: '350px',
  height: '40px',
  //background: '#0A103A', 
  color : 'black',
  border: `2px solid purple`,
};

const signInButtonStyle = {
  width: '350px',
  height: '40px',
  background: 'linear-gradient(180deg, #327FA3 41.67%, #1D1B65 100%)',
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


const { Header, Content } = Layout;

function Signin(){
 
  const [lang,setLang] = useState(langs.tr)
  const [selectedLanguage , setSelectedLanguage] = useState("tr")

  const switchLang=()=>{
    setSelectedLanguage(selectedLanguage==="tr" ? "en" : "tr");
    lang===langs.tr ? setLang(langs.en):setLang(langs.tr)
  }

  return(

    <LangContext.Provider value={lang}>

    <Layout style={{ backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage :'url('+bg+')',
      }}>
      <Header style={navbarStyle}>
         <img src={logo} alt="logo" style={logoStyle} />
         <h1 style={titleStyle}>Infinity</h1>
         <button style={{marginLeft : '80%' , background: 'rgba(0,0,0,0)', border : 'none'}} onClick={switchLang}> <u>Dil Değiştir </u> </button>

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
                    }}>{lang.giris}</Title>
                   </div>
                   <div style={whitePlaceStyle}> 
                    <Title level={5} style={{color: '#0A103A', marginRight: '160px'}}>{lang.hosgeldin}</Title>
                  </div>
                  <br>
                  </br>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Title level ={2} style={{color: '#0A103A', marginRight: '230px'}}>{lang.ad}</Title>
                  </div>
                  <div style={whitePlaceStyle}>
                    <Input style={inputStyle}/>
                  </div>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Title level ={2} style={{color: '#0A103A',  marginRight: '200px'}}>{lang.soyad}</Title>
                  </div>
                  <div style={whitePlaceStyle}>
                    <Input style={inputStyle}/>
                  </div> 
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Checkbox onChange={onChange} style={{marginRight: '170px'}} >{lang.checkbox}</Checkbox>
                  </div>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Button size="large" style={signInButtonStyle} shape='round'>
                    {lang.kayıtol}</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
        </div>
    </Layout>
   
    </LangContext.Provider>
  );
}

export default Signin;
