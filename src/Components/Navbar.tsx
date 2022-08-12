import React, { useState } from "react";
import { Button, Descriptions, PageHeader, Row, Statistic, Tag } from 'antd';
import logo from '../images/logo_infinity.png';


const logoStyle = {
   width: '79.1px',
   height: '64.6px',
   marginLeft: '3%',
   marginTop: '.5%',
   marginBottom: '.5%',
};

const headerStyle = {
   width: '90%',
   marginTop: '.25%',
   fontFamily: 'Arial',
   fontStyle: 'normal',
   backgroundColor: '#03007D',
   color: '#000000'
};


const navbarStyle = {
   display: 'flex',
   flexDirection: 'row',
   marginBottom: '1%',
   backgroundColor: '#03007D',
} as React.CSSProperties;

const Navbar = ({ subtitle }: { subtitle: string }) => {
   return (
      <div style={navbarStyle}>
         <img src={logo} alt="logo" style={logoStyle} />
         <PageHeader style={headerStyle}
            className="site-page-header"
            title="Infinity"
            subTitle={subtitle}
            extra={[
               <Button shape="round" key="2">Sign In</Button>,
               <Button shape="round" key="1" type="primary">
                  Sign Up
               </Button>,
            ]}
         >
         </PageHeader>
      </div >
   );
}

export default Navbar;
