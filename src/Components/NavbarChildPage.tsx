import React, { useState } from "react";
import { Button, Descriptions, PageHeader, Row, Statistic, Tag } from 'antd';
import logo from '../images/logo_infinity.png';
import { Layout } from "antd";
import { Avatar } from 'antd';
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
   background: 'rgba(0, 0, 0, 0)',
   position: 'sticky',
   top: '0',
} as React.CSSProperties;

const titleStyle = {
   color: '#fff',
   paddingTop: '.5%',
};

const avatarStyle = {
   marginLeft: "1080px",
   marginTop: '20px',
   width: "100px",
   height: "90px",
   paddingTop: "27px",
   textAlign: "center",
   fontSize:"25px",
   color: "black",
 
} as React.CSSProperties;

const Navbar = () => {
   return (
      <Header style={headerStyle}>
         <img src={logo} alt="logo" style={logoStyle} />
         <h1 style={titleStyle}>Infinity</h1>

         <Avatar style={avatarStyle} >NS</Avatar>
      </Header >
   );
}

export default Navbar;
