import React, { useState } from "react";
import { Button, Descriptions, PageHeader, Row, Statistic, Tag } from 'antd';
import logo from '../images/logo_infinity.png';
import { Layout } from "antd";
import { Typography } from "antd";
import metamask from '../images/MetaMask.png';
import { Language } from "../App";

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

const languageStyle = {
   float: 'right',
   marginLeft: 'auto',
   alignSelf: 'center',
   width: '40px',
   height: '40px',
   background: 'linear-gradient(180deg, #EFAA45 0%, rgba(217, 217, 217, 0) 100%)',
   borderRadius : '20px',
   textAlign :"center",
} as React.CSSProperties;

const Navbar = () => {
   return (
      <Header style={headerStyle}>
         <img src={logo} alt="logo" style={logoStyle} />
         <h1 style={titleStyle}>INTERITANCE</h1>
         <div style={languageStyle}>
         <Language/>
         </div>
      </Header >
   );
}

export default Navbar;
