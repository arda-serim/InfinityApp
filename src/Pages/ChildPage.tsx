import Navbar from '../Components/NavbarChildPage';
import Sayac from '../Components/Sayac';
import React, { useEffect } from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Col, Row, Slider, Typography, Card, Statistic } from 'antd';
import { useState } from 'react';
import { Button, Image, Space, Empty, Input, Radio, } from 'antd';
import logo from '../images/logo_infinity.png';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useNavigate } from 'react-router-dom';
import picture from '../images/newPicture.png';
import edit from '../images/editfoto.png';
import TRY from '../images/pngwing.com.png';
import type { countdownValueType } from 'antd/es/statistic/utils';
import { withdrawMoneyByChild, getChild, withdrawAllMoneyByChild } from '../contract/functions';
import connectToMetamask from '../contract';
import { ML } from '../App';
import ModalComponent from '../Components/ModalComponent';
const { Countdown } = Statistic;


const { Countdown } = Statistic;

const colStyle = {
    background: "rgba(0 ,0 ,0 ,0)",
    minHeight: 850,

};

const contentStyle = {
    width: '100%',
    heigth: '100%',

};
const cardStyle = {
    width: '500px',
    heigth: '1000px',
    marginLeft: "120px",
    backgorundColor: "black",
}

const lineStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: 'black',
    fontSize: '20px',
    whiteSpace: "pre-wrap",
    border: "1px solid #D9D9D9",
    borderRadius: "10px",
    width: "200px",
    height: "50px",
    marginLeft: "130px",
    marginTop: "30px",
    background: "#D9D9D9",
    paddingTop: "9px",

} as React.CSSProperties;


const textStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: 'black',
    fontSize: '13px',
    whiteSpace: "pre-wrap",
    width: "200px",
    marginLeft: "130px",
    marginTop: "-15px",
} as React.CSSProperties;

const inputStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: 'black',
    fontSize: '13px',
    whiteSpace: "pre-wrap",
    width: "250px",
    height: '40px',
    marginLeft: "105px",
    border: "#1D1B65",
    borderRadius: "30px",
    background: "linear-gradient(#FFFFFF, #1D1B65)",
} as React.CSSProperties;

const buttonStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: 'white',
    fontSize: '13px',
    whiteSpace: "pre-wrap",
    width: '200px',
    height: '40px',
    marginLeft: "135px",
    paddingTop: "8px",
    border: "#327FA3",
    borderRadius: "30px",
    background: "linear-gradient(#EF886C, #EFAA45)",
    textAlign: "center",

} as React.CSSProperties;

const imageStyle = {
    //width: '500px',
    //height: '400px',
    width: "80%",
    heigth: "40%",
    borderRadius: '15px',
    marginTop: '170px',
    marginLeft: "30px",
    border: "1px solid #40D8D8",

}
const buttonStyle2 = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: 'white',
    fontSize: '13px',
    whiteSpace: "pre-wrap",
    width: '200px',
    height: '40px',
    marginLeft: "135px",
    paddingTop: "8px",
    border: "#5E7D8B",
    borderRadius: "30px",
    background: "linear-gradient(#5E7D8B  50.02%, #1D1B65  99.95%)",
    textAlign: "center",
} as React.CSSProperties;

const tryStyle = {
    width: "25px",
    paddingBottom: "5px",
}
export interface child {
    name: string;
    releaseTime: Date;
    address: string;

}

const pageStyle = {
    background: 'linear-gradient(to bottom, #0A368B,#3B82A0)',
    // full page
    minHeight: '100vh',
    minWidth: '100vw',
 
 };
const { Title } = Typography;


const ChildPage = () => {
    const [input, setInput] = useState();
    const [child, setChild] = useState({ amountOfMoney: '', releaseTime: '', name: '' });
    const [error, setError] = useState();
    let navigate = useNavigate();
    useEffect(() => {

        if (localStorage.getItem("role") === "parent") {
            navigate("/parent");
        }
        


         if (localStorage.getItem("role") === undefined || localStorage.getItem("role") === null || localStorage.getItem("role") === 'none') {
             navigate("/");
         }


        async function getThisChild() {
            const { signerAddress } = await connectToMetamask();

            const tempChild = await getChild(signerAddress);
            console.log(Number(tempChild.amountOfMoney));
            setChild(tempChild);
            console.log(tempChild);
            console.log(child.releaseTime)
        }
        getThisChild();

    }, [])

    const onWithdrawAll = async () => {
        try {
            await withdrawAllMoneyByChild();

            window.location.reload();
        }
        catch (error: any) {
            setError((error.reason.split(":"))[1])
        }
    };

    const setClick = async () => {
        try {
            await withdrawMoneyByChild(input);
            //@ts-ignore
            setInput('');
            window.location.reload();
        }
        catch (error: any) {
            setError((error.reason.split(":"))[1])
        }
    }

    //@ts-ignore
    const date = new Date(child.releaseTime * 1000).toLocaleDateString();

    const clearError = () => {
        //@ts-ignore
        setError('');
    }

    return (

        <Layout style={pageStyle}>
            <div>

                <Navbar />

            </div>
            {
                error && <ModalComponent modalVisibility={true} message={error} style={{ color: 'red' }} onClear={clearError} />
            }
            <div style={contentStyle}>
                <Content>
                    <div style={colStyle} >
                        <Row gutter={[16, 8]}>
                            <Col span={12}>
                                <div>
                                    <Title level={2} style={{ marginLeft: "260px", width: "400px", marginTop: "50px", color: "white" }} >
                                        {ML('user')} {' '} {String(child.name)}!
                                    </Title>
                                </div>
                                <div style={cardStyle}>
                                    <Card style={{ background: "#4268B1  50.02%", border: "#4268B1", borderRadius: "30px", height: "450px" }}>
                                        <p style={lineStyle}>
                                            <text style={{ color: 'black' }}>{Number(child.amountOfMoney) / (Math.pow(10, 18))} ETH{/*<img src={TRY} style={tryStyle} />*/}</text>

                                        </p>
                                        <p style={textStyle}>
                                            <text style={{ color: '#FFFFFF', opacity: "0.18" }}>{date}</text>
                                        </p>
                                        <br />
                                        {/* {child?.releaseTime && child?.releaseTime > new Date() && <>
                                            <Countdown /*title="Day Level"  value={child?.releaseTime.getTime()} format="DD Gün HH:mm:ss kaldı" valueStyle={{ color: "white", width: "100%", textAlign: "center", }} />
                                        </>} */}

                                        <br />
                                        <Input style={inputStyle} onChange={(event: any) => setInput(event.target.value)} />
                                        <br />
                                        <Button style={buttonStyle} onClick={setClick} >{ML('geriCek')}</Button>
                                        <br />
                                        <Button style={buttonStyle2} onClick={onWithdrawAll} >{ML('tumParayıCek')}</Button>

                                    </Card>

                                </div>
                            </Col>
                            <Col span={12} >
                                <img src={picture} style={imageStyle} />
                            </Col>
                        </Row>
                    </div>

                </Content>
            </div>
        </Layout>

    );
}






export default ChildPage;