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
   marginLeft: '1%',
   marginTop: '.5%',
   marginBottom: '.5%'
};


const headerStyle = {
   display: 'flex',
   flexDirection: 'row',
   height: '10%',
   background: 'linear-gradient(to left, #2F3C9E, #253184, #192364, #11194D, #0C1340, #0A113B, #000020)',
} as React.CSSProperties;

const titleStyle = {
   color: '#fff',
   paddingTop: '.5%',
};

const buttonBoxStyle = {
   display: 'flex',
   flexDirection: 'row',
   paddingTop: '1.3%',
   marginLeft: 'auto',
   justifyItems: 'space-between',
   width: '15%',
} as React.CSSProperties;

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

      </Header >
   );
}

export default Navbar;
