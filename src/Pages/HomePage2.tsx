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

   background: 'linear-gradient(to left, #2F3C9E, #253184, #192364, #11194D, #0C1340, #0A113B, #000020)',
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
   marginLeft: '-15%',
   marginTop: '-13%',
};

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

declare var window: any


function HomePage() {
   const [errorMessage, setErrorMessage] = useState('');
   const [defaultAccount, setDefaultAccount] = useState('');
   const [userBalance, setUserBalance] = useState('');
   const [connButtonText, setConnButtonText] = useState('Log In with Metamask');
console.log(test);
   const connectWalletHandler = async () => {
      if (window.ethereum) {
         const provider = new ethers.providers.Web3Provider(window.ethereum);
         let accounts = await provider.send("eth_requestAccounts", []);
         let account = accounts[0];
         provider.on('accountsChanged', (accounts: any) => { account = accounts[0]; console.log(address); });

         let signer = provider.getSigner();

         const address = await signer.getAddress();
         console.log(address, account);
      }
      else {
         setErrorMessage('Please install MetaMask');
      }
      console.log("yeni güncelleme")
   }

   const accountChangedHandler = (newAccount: React.SetStateAction<string>) => {
      console.log("bura?.");
      setDefaultAccount(newAccount);
      getUserBalance(newAccount);
   }

   const getUserBalance = (address: React.SetStateAction<string>) => {
      console.log("peki?.");
   }

   return (
      <Layout >
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