import React, { useState } from "react";
import { Button, Descriptions, PageHeader, Row, Statistic, Tag } from 'antd';
import logo from '../images/logo_infinity.png';
import { Layout } from "antd";
import { Typography } from "antd";
import metamask from '../images/MetaMask.png';
import { Language } from "../App";
import { useNavigate } from "react-router-dom";
import { ML } from '../App';
import { DownloadOutlined, LogoutOutlined } from "@ant-design/icons";


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
} as React.CSSProperties;

const titleStyle = {
    color: '#fff',
    paddingTop: '.5%',
};

const languageStyle = {
    marginLeft: 'auto',
    alignSelf: 'center',
    width: '40px',
    height: '40px',
    //background: 'linear-gradient(180deg, #EFAA45 0%, rgba(217, 217, 217, 0) 100%)',
    //background: 'linear-gradient(to bottom right, #336600 0%, #009999 100%)',
    //background: "linear-gradient(#EF886C, #EFAA45)",
    background: 'linear-gradient(180deg, #FF980E 41.67%, #FDB137 100%)',
    borderRadius: '20px',
    textAlign: "center",
    justifyContent: 'center',
    alignItems: "center",
    lineHeight: "40px",
    textColor: 'white'
} as React.CSSProperties;

const button = {
    color: 'white',

};





const Navbar = () => {
    const navigate = useNavigate();

    function onLogOut() {
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        localStorage.removeItem('role');
        localStorage.removeItem('address');
        window.location.href = '/';
    }

    const buttonsStyle = {
        float: 'right',
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '10%',
        alignItems: 'center',
    } as React.CSSProperties;

    return (
        <Header style={headerStyle}>
            <span onClick={() => navigate('/parent')} style={{
                display: 'flex',
                flexDirection: 'row',
            }} >
                <img src={logo} alt="logo" style={logoStyle} />
                <h1 style={titleStyle} >INTERITANCE</h1>
            </span>
            <div style={buttonsStyle}>
                <div style={languageStyle}>

                    <Language />
                </div>
                <Button onClick={onLogOut} type="link" icon={<LogoutOutlined />} size={"large"} style={{ color: 'white' }} />
            </div>


        </Header >
    );
}

export default Navbar;
