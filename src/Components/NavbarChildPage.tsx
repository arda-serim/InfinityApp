import React, { useState } from "react";
import { Button, Descriptions, PageHeader, Result, Row, Statistic, Tag } from 'antd';
import logo from '../images/logo_infinity.png';
import { Layout } from "antd";
import { Avatar } from 'antd';
import { Typography } from "antd";
import metamask from '../images/MetaMask.png';
import { Language, ML } from "../App";
import { DownloadOutlined, LogoutOutlined } from "@ant-design/icons";
import connectToMetamask from "../contract";
import { getChild, getRole } from "../contract/functions";


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
   // marginLeft: '10px',
   alignSelf: 'center',
   width: '40px',
   height: '40px',
   background: 'linear-gradient(#5E7D8B  50.02%, #1D1B65  99.95%)',
   borderRadius: '20px',
   textAlign: "center",
   justifyContent: 'center',
   alignItems: "center",
   lineHeight: "40px",

} as React.CSSProperties;

const buttonsStyle = {
   float: 'right',
   marginLeft: 'auto',
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-evenly',
   width: '10%',
   alignItems: 'center',
} as React.CSSProperties;

const languageStyle = {
   // marginLeft: '980px',
   alignSelf: 'center',
   width: '40px',
   height: '40px',
   background: "linear-gradient(#EF886C, #EFAA45)",
   borderRadius: '20px',
   textAlign: "center",
   justifyContent: 'center',
   alignItems: "center",
   lineHeight: "40px",
} as React.CSSProperties;

function onLogOut() {
   localStorage.removeItem('user');
   sessionStorage.removeItem('user');
   localStorage.removeItem('role');
   localStorage.removeItem('address');
   window.location.href = '/';
}


const Navbar = () => {
   const [child, setChild] = useState({name: '' });
   let result;
   
   async function Role(){
      const role = await getRole();
      localStorage.setItem('role', role);
      if (role === 'child') {
         result = result1
      }

   }
   async function getThisChild() {
      const tempChild = await getChild();
      setChild(tempChild);
   }
   getThisChild();
   let fullName = child.name
   let arrName = fullName.split(" ");
   let iniName = fullName.charAt(0);
   let iniLname = arrName[arrName.length - 1].charAt(0);
   let initials = iniName + iniLname;
   const result1 = initials.toUpperCase();


   return (
      <Header style={headerStyle}>
         <img src={logo} alt="logo" style={logoStyle} />
         <h1 style={titleStyle}>INTERITANCE</h1>
         <div style={buttonsStyle}>
            <div style={languageStyle}>
               <Language />
            </div>
            <Avatar style={avatarStyle} >{result}</Avatar>
            <Button onClick={onLogOut} type="link" icon={<LogoutOutlined />} size={"large"} style={{ color: 'white' }} />
         </div>
      </Header >
   );
}

export default Navbar;







// float: 'right',
// marginLeft: 'auto',
// alignSelf: 'center',
// width: '40px',
// height: '40px',
// textAlign: 'center',
// paddingTop: '10px',
// color: '#000',
// lineHeight:"40px",