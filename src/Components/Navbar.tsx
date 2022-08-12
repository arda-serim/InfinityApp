import React, { useState } from "react";
import { Button, Descriptions, PageHeader, Row, Statistic, Tag } from 'antd';
import logo from '../images/logo_infinity.png';
import { Layout } from "antd";
import { Typography } from "antd";
import metamask from '../images/MetaMask.png';

const { Title } = Typography;
const { Header } = Layout;

const logoStyle = {
   width: '86px',
   height: '71px',
   marginLeft: '3%',
   marginTop: '.5%',
   marginBottom: '.5%'
};


const headerStyle = {
   display: 'flex',
   flexDirection: 'row',
   height: '10%',
   backgroundColor: '#0B0142',
} as React.CSSProperties;

const titleStyle = {
   color: '#fff',
   paddingTop: '1%',
};

const buttonBoxStyle = {
   display: 'flex',
   flexDirection: 'row',
   paddingTop: '1.3%',
   marginLeft: 'auto',
   justifyItems: 'space-between',
   width: '15%',
} as React.CSSProperties;


const buttonStyle = {
   marginRight: '5%',
   backgroundColor: '#0B0142',
   color: '#fff',
};

const signUpButtonStyle = {
   marginRight: '5%',
   backgroundColor: '#fff',
   color: '#000',
};


const Navbar = () => {
   return (
      <Header style={headerStyle}>
         <img src={logo} alt="logo" style={logoStyle} />
         <h1 style={titleStyle}>Infinity</h1>
         <div style={buttonBoxStyle}>
            <Button size="large" style={signUpButtonStyle} shape='round'>
               <img src={metamask} style={{ width: '20px', height: '20px' }}></img>
               Log In with Metamask</Button>
         </div>
      </Header >
   );
}

export default Navbar;
