import React, { useState } from "react";
import { Button, Descriptions, PageHeader, Row, Statistic, Tag } from 'antd';
import logo from '../images/logo_infinity.png';
import { Layout } from "antd";
import { Typography } from "antd";

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
};


const Navbar = () => {
   return (
      <Header style={headerStyle}>
         <img src={logo} alt="logo" style={logoStyle} />
         <Title style={titleStyle}>Infinity</Title>
         <div style={buttonBoxStyle}>
            <Button size="large" style={buttonStyle} shape='round'>Sign In</Button>
            <Button size="large" style={signUpButtonStyle} type="primary" shape='round'>Sign Up</Button>
         </div>
      </Header >
   );
}

export default Navbar;
