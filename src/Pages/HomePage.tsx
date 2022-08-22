import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { Col, Row, Layout, Card } from 'antd';
import icon from '../images/ethereum.png';
import { Typography } from 'antd';
import test from '../images/homeImage.png';
import { title } from 'process';
import metamask from '../images/MetaMask.png';
import logo from '../images/logo_infinity.png';
import { Button } from 'antd';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';




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
   width: '1087px',
   height: '954px',
   borderRadius: '15px',
   float: 'right',
   marginLeft: '-15%',
   marginTop: '-13%',
} as React.CSSProperties;

const contentStyle = {
   width: '100%',
   height: '100%',
};

const navbarStyle = {
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
   React.useEffect(() => {
      let session;
      if (localStorage.getItem('user')) {
         session = localStorage.getItem('user')
      }
      else if (sessionStorage.getItem('user')) {
         session = sessionStorage.getItem('user')
      }
      if (session) {
         let role = JSON.parse(session).role;
         role === 'parent' ? navigate('/parent') : navigate('/ChildPage');
      }
   }, []);


   const [errorMessage, setErrorMessage] = useState('');


   const connectWalletHandler = async () => {
      if (window.ethereum) {
         const provider = new ethers.providers.Web3Provider(window.ethereum);
         let accounts = await provider.send("eth_requestAccounts", []);
         let account = accounts[0];
         provider.on('accountsChanged', (accounts: any) => { account = accounts[0]; console.log(address); });

         let signer = provider.getSigner();

         const address = await signer.getAddress();

         let usr;
         let userAddress;
         if (localStorage.getItem('user')) {
            usr = localStorage.getItem('user')
            if (usr)
               userAddress = JSON.parse(usr).address;
         }
         else if (sessionStorage.getItem('user')) {
            usr = sessionStorage.getItem('user')
            if (usr)
               userAddress = JSON.parse(usr).address;
         }
         if (userAddress === address) {

            if (usr)
               JSON.parse(usr).role === 'parent' ? navigate('/parent') : navigate('/ChildScreen');
         }



         console.log('hereeee')
         sessionStorage.removeItem('user');
         localStorage.removeItem('user');

         sessionStorage.setItem('address', account)
         navigate('/Signin');



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
                           <Title level={2} style={{ color: '#fff' }}>Welcome to <text style={{ color: '#723BFA' }}>INFINITY</text></Title>
                           <p style={{ color: '#fff' }}>Infinity is the investing app for your child. If you want to
                              leave a legacy to your children, join us now. </p>
                        </div>
                        <div style={buttonBoxStyle}>
                           <Button size="large" onClick={connectWalletHandler} style={signUpButtonStyle} shape='round'>
                              <img src={metamask} style={{ width: '20px', height: '20px' }}></img>
                              Log In with Metamask</Button>
                        </div>
                        <div style={cardStyle}>
                           <Card bordered={false} style={card}>
                              <h1 style={{ color: '#fff', fontSize: 32, fontStyle: 'italic' }}>What You Need</h1>
                              <div style={insideCard}>
                                 <p > <img style={iconStyle} src={icon} />
                                    You need to have a <a href='https://metamask.io/'>metamask</a> wallet.<br></br>
                                    <text style={{ fontSize: 12, marginLeft: 20 }}>  If you don't have a metamask account, < a href='https://metamask.io/download/' > click here.</a></text>
                                 </p>
                                 <p  > <img style={iconStyle} src={icon} />
                                    You must have a certain amount of <a href='https://ethereum.org/en/'>ethereum</a> in your wallet.
                                 </p>
                                 <p  > <img style={iconStyle} src={icon} />
                                    Create and set up your children's accounts.
                                 </p>
                                 <p  > <img style={iconStyle} src={icon} />
                                    You can manage your children’s accounts as you wish and invest as much as you want.
                                 </p>
                                 <p  > <img style={iconStyle} src={icon} />
                                    When the date you set comes, your child will have access to their wallet.
                                 </p>
                              </div>
                           </Card>
                        </div>
                     </Col>

                     <Col span={12} >
                        <img src={test} style={imageStyle} />
                     </Col>
                  </Row>
               </div>
            </Content >
         </div >
      </Layout >
   );
}


export default HomePage;