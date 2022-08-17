import { Layout  , Card , Typography ,Button ,Radio , Checkbox} from 'antd';
import React from 'react';
import Navbar from '../Components/Navbar';
import { Col, Row, Slider } from 'antd';
import { useState } from 'react';
import signinpng from '../images/signin.png';
import background from '../images/background2.png';
import { url } from 'inspector';
import { Input } from 'antd';
import { LoginOutlined  } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';






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
   background: '#0A103A', 
   marginLeft : '250px',
   marginTop : '10px',
   border : 'none',
  
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

  const buttonDivStyle = {
    marginLeft : '250px',
    marginTop : '50px',
    
   
  };

  const buttonStyle ={
    background: 'linear-gradient( #327FA3 , #1D1B65)',
    border : 'none',
    width: '350px',
    height: '40px',
    
  };


  const titleStyle = {
    textAligin : 'center',
    fontSize : '20px',
    marginLeft : '250px',
    marginTop: '120px',

  };

  const titleStyle1 = {
    textAligin : 'center',
    fontSize : '20px',
    marginLeft : '250px',
    marginTop : '50px',

  };


const { Header, Footer, Sider, Content } = Layout;


function Signin(){
 
  const [size, setSize] = useState<SizeType>('large');
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
               <div>
               <Title style = {titleStyle}>
                  Name
                </Title >
               </div>
                  <div>
                     <Input style={inputStyle} placeholder=""/>
                  </div>  
          
                <div>
                <Title style = {titleStyle1}>
                  Surname
                </Title >
                </div>
                
                  <div >
                     <Input style={inputStyle2} placeholder=""/>
                  </div> 
                 
                 
                  <div>
                
                  </div>


                  <div style={buttonDivStyle}>
                  <Button style={buttonStyle} type="primary" shape="round" icon={<LoginOutlined />} size={size}>
                     Sign In
                    </Button>
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