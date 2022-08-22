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
   float: 'right',
   marginLeft: 'auto',
   alignSelf: 'center',
   width: '50px',
   height: '50px',
   textAlign: 'center',
   paddingTop: '10px',
   color: '#000',

} as React.CSSProperties;

const buttonStyle = {
   alignSelf: 'center',
   marginLeft: '1%',
} as React.CSSProperties;

function onLogOut() {
   localStorage.removeItem('user');
   sessionStorage.removeItem('user');
   window.location.href = '/';
}


const Navbar = () => {
   let name;
   let surname;
   let user;
   if (localStorage.getItem("user")) {
      user = localStorage.getItem("user");
      if (user)
         user = JSON.parse(user);
   }
   else if (sessionStorage.getItem("user")) {
      user = sessionStorage.getItem("user");
      if (user)
         user = JSON.parse(user);

   }

   name = user.name;


   return (
      <Header style={headerStyle}>
         <img src={logo} alt="logo" style={logoStyle} />
         <h1 style={titleStyle}>Infinity</h1>
         <Avatar style={avatarStyle} >{name}</Avatar>
         <Button onClick={onLogOut} style={buttonStyle} type="primary" shape="round" danger>Log Out</Button>
      </Header >
   );
}

export default Navbar;