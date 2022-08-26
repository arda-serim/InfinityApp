import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Col, Row, Layout, Card } from 'antd';
import icon from '../images/ethereum.png';
import { Typography } from 'antd';
import test from '../images/homepage.png';
import { title } from 'process';
import metamask from '../images/MetaMask.png';
import logo from '../images/logo_infinity.png';
import { Button } from 'antd';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import connectToMetamask from '../contract';
import { getRole } from '../contract/functions';
import { ML } from '../App';
import test1 from '../images/smart-contracts.png';
import test2 from '../images/target.png';
import { Footer } from 'antd/lib/layout/layout';
import test3 from '../images/homepage2.png';
import test4 from '../images/Vector.png'




const { Content } = Layout;
const { Title } = Typography;

const cardStyle = {
   padding: '4%',
   fontSize: '24px',
};

const iconStyle = {
   width: '15px',
   height: '25px'
};

const colStyle = {
   background: 'rgba(0, 0, 0, 0)',
   padding: 24,
   minHeight: 580
};

const card = {
   display: 'flex',
   flexDirection: 'column',
   width: '800px',
   height: '500px',
   color: '#fff',
   background: 'rgba(0, 0, 0, 0)',
   marginLeft: '-3%',
   zIndex : 2

} as React.CSSProperties;

const insideCard = {
   display: 'flex',
   flexDirection: 'column',
   height: '100%',
   width: '100%',
   marginTop: '10%',
   fontSize: '20px',

} as React.CSSProperties;

const imageStyle = {
   width: '1000px',
   height: '800px',
   borderRadius: '15px',
   float: 'right',
  // marginLeft: '-15%',
  // marginTop: '-13%',
  marginRight : '0',
   zIndex : '1',
   position : 'absolute',
   right :'0'
} as React.CSSProperties;

const imageStyle1 = {
   width: '2000px',
   height: '900px',
   borderRadius: '15px',
   float: 'right',
   marginLeft: '-15%',
   marginTop: '-13%',
   zIndex :'-1',
   opacity : '0.4',
  
} as React.CSSProperties;



const contentStyle = {
   width: '100%',
   height: '100%',
   
};

const navbarStyle = {
   zIndex : 2
};

const buttonBoxStyle = {
   paddingTop: '1.3%',
   width: '15%',
   marginLeft: '50px',

};

const signUpButtonStyle = {
   marginRight: '5%',
   background: 'linear-gradient(180deg, #091058 , #305367)',
   color: '#fff',
   border: 'none',
   zIndex : 2
};

const pageStyle = {
   background: 'linear-gradient(to bottom, #0A368B,#3B82A0)',
   // full page
   minHeight: '100vh',
   minWidth: '100vw',

};



declare var window: any


const HomePage = () => {

   let navigate = useNavigate();

   // if there is session send to next page
   // React.useEffect(() => {

   //    let session;
   //    if (localStorage.getItem('user')) {
   //       session = localStorage.getItem('user')
   //    }
   //    else if (sessionStorage.getItem('user')) {
   //       session = sessionStorage.getItem('user')
   //    }
   //    if (session) {
   //       let role = JSON.parse(session).role;
   //       role === 'parent' ? navigate('/parent') : navigate('/ChildPage');
   //    }
   // }, []);


   const [errorMessage, setErrorMessage] = useState('');


   const connectWalletHandler = async () => {
      console.log('connectWalletHandler');
      if (window.ethereum) {
         const role = await getRole();
         localStorage.setItem('role', role);

         const { signerAddress } = await connectToMetamask();


               //GERİ ALACANN

                if (role === 'parent') {
                  navigate('/parent');
                }  
                else if (role === 'child') {
                navigate('/childpage');
                }
                else {
                  navigate('/signin');
                }
              

      }
      else {
         alert('Please install MetaMask Extension');
      }

   }

   return (
      <Layout style={pageStyle}>
         <div style={navbarStyle}>
            <Navbar />
         </div>
         <div style={contentStyle}>
            <Content>
               <div style={colStyle}>
                  <Row gutter={[24, 8]}>
                     <Col span={12} >
                        <div style={cardStyle}>
                           {<Title level={2} style={{ color: '#EFAA45' }}>{ML('homePageGiris1')}
                              {/* <text style={{ color: '#723BFA' }}>INTERITANCE</text> */}
                           </Title>}
                           <p style={{ color: '#fff' }}>{ML('appInfo')} </p>
                        </div>
                        <div style={buttonBoxStyle}>
                           <Button size="large" onClick={connectWalletHandler} style={signUpButtonStyle} shape='round'>
                              <img src={metamask} style={{ width: '20px', height: '20px' }}></img>
                              {ML('loginwm')}</Button>
                        </div>
                        <div style={cardStyle}>
                           <Card bordered={false} style={card}>
                              <h1 style={{ color: '#fff', fontSize: 32, fontStyle: 'italic' }}>{ML('need')}</h1>
                              <div style={insideCard}>
                                 <p > <img style={iconStyle} src={icon} />
                                    {ML('first')} <a href='https://metamask.io/'>metamask</a> wallet.<br></br>
                                    <text style={{ fontSize: 12, marginLeft: 20 }}>  {ML('first_')} < a href='https://metamask.io/download/' > {ML('click here')}</a></text>
                                 </p>
                                 <p  > <img style={iconStyle} src={icon} />
                                    {ML('second')} <a href='https://ethereum.org/en/'>ethereum</a> {ML('second_')}
                                 </p>
                                 <p  > <img style={iconStyle} src={icon} />
                                    {ML('third')}
                                 </p>
                                 <p  > <img style={iconStyle} src={icon} />
                                    {ML('fourth')}
                                 </p>
                                 <p  > <img style={iconStyle} src={icon} />
                                    {ML('fifth')}
                                 </p>
                              </div>
                           </Card>
                        </div>
                     </Col>

                     <Col span={12} > 
                        <img src={test4} style={imageStyle1} />
                        <img src={test3} style={imageStyle} />
                     </Col>
                  </Row>
               </div>
               <div style={contentStyle}>
               <Row gutter={[24, 8]}>
                 
                  <Col span={12}  >
                     
                     <div style={{width : '400px' , height : '400px' , borderRadius: '200px' , background: 'linear-gradient(180deg, #EFAA45 0%, rgba(217, 217, 217, 0) 100%)',zIndex : 1  , marginLeft : '20%' , marginTop: '10%'}}>
                     <img src={test1} style={{width: '300px' , height : '300px' , marginLeft: '10%' , marginTop : '10%', zIndex :2}}/>
                     </div>
                     
                  </Col>
                  <Col span={12} >
                     <p style={{ color : 'white' , marginLeft : '30%' , fontSize : '20px' , marginTop : '20%'}}>
                        Why Ethereum ?
                     </p>
                     <p style={{marginTop : '5%' , color : 'white' , marginRight : '20%' , fontSize : '20px'}} >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga </p>
                  </Col>
                  
              
               </Row>
               </div>

               <div style={contentStyle}>
               <Row gutter={[24, 8]}>
               <Col span={12} >

                  <p style={{marginTop : '25%' , color : 'white' , marginLeft : '40%' , fontSize : '20px'}}>
                      Our vision and mission
                  </p>
               <p style={{marginTop : '5%' , color : 'white' , marginLeft : '20%' , fontSize : '20px'}} >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                  molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                   numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga </p>
               </Col>
               <Col span={12} >
                  <div style={{width : '400px' , height : '400px' , borderRadius: '200px' , background: 'linear-gradient(180deg, #EFAA45 0%, rgba(217, 217, 217, 0) 100%)',zIndex : 1 , marginLeft : '20%' , marginTop: '20%' }}>
                  <img src={test2} style={{width: '300px' , height : '300px' , marginLeft: '10%' , marginTop : '10%' , zIndex :2}}/>
                  </div>
                
               </Col>
               </Row>
               </div>

            </Content >
         </div >
         

      </Layout >
   );
}


export default HomePage;