import Navbar from '../Components/NavbarChildPage';
import Sayac from '../Components/Sayac';
import React, { useEffect } from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Col, Row, Slider, Typography, Card, Statistic, Spin } from 'antd';
import { useState } from 'react';
import { Button, Image, Space, Empty, Input, Radio, } from 'antd';
import logo from '../images/logo_infinity.png';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useNavigate } from 'react-router-dom';
import picture from '../images/newPicture.png';
import edit from '../images/editfoto.png';
import TRY from '../images/pngwing.com.png';
import type { countdownValueType } from 'antd/es/statistic/utils';
import { withdrawMoneyByChild, getChild, withdrawAllMoneyByChild, getRole } from '../contract/functions';
import connectToMetamask from '../contract';
import { ML } from '../App';
import CustomModal from '../Components/CustomModal';
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
    fontSize: '15px',
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
    borderRadius: "30px",
    background: "#FFFFFF)",
    border: '1px solid #40D8D8',
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
    const [isLoading, setIsLoading] = useState(false);
    const [display, setDisplay] = useState(false);

    let navigate = useNavigate();
    useEffect(() => {

        const roleFunc = async() => {
            const role = await getRole();
            if (role === 'admin') {
               navigate('/admin');
            } else if (role === 'parent') {
               navigate('/parent');
            } else if(role !== 'child') {
               navigate('/');
            }
         }
      
         roleFunc();


        async function getThisChild() {
            const tempChild = await getChild();
            setChild(tempChild);
        }
        getThisChild();



    }, [])

    useEffect(() => {
        //@ts-ignore
        const releaseTime = (child.releaseTime * 1000)

        const currentDate = Date.now()

        const currentTime = Math.floor(new Date(currentDate).getTime());

        if (releaseTime > currentTime) {
            setDisplay(true);
        } else {
            setDisplay(false);
        }
    }, [child])

    const onWithdrawAll = async () => {
        try {
            setIsLoading(true);
            await withdrawAllMoneyByChild();
            setIsLoading(false);
            window.location.reload();
        }
        catch (error: any) {
            const activeLanguage = localStorage.getItem("i18nextLng");
            const errorMessage = (error.reason.split(":"))[1]
            const messageEN = errorMessage.split("TR")[0]
            const messageTR = errorMessage.split("TR")[1]

            if (activeLanguage === 'en') {
                setError(messageEN)
            } else {
                setError(messageTR)
            }
            setIsLoading(false);
        }
    };

    const setClick = async () => {
        try {
            setIsLoading(true);
            await withdrawMoneyByChild(input);
            setIsLoading(false);
            window.location.reload();
        }
        catch (error: any) {
            const activeLanguage = localStorage.getItem("i18nextLng");
            const errorMessage = (error.reason.split(":"))[1]
            const messageEN = errorMessage.split("TR")[0]
            const messageTR = errorMessage.split("TR")[1]

            if (activeLanguage === 'en') {
                setError(messageEN)
            } else {
                setError(messageTR)
            }
            setIsLoading(false);
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
                isLoading && <CustomModal show header={ML('loading')} footer={<Spin />}>
                    <div>
                        <span style={{ margin: '16px' }}>
                            {ML('withdrawalProcess')}
                        </span>

                    </div>
                </CustomModal>
            }
            {
                error && <CustomModal show header={ML('errorOccured')} btnShow={true} onClear={clearError}>
                    <span style={{ margin: '16px' }}>
                        {error}
                    </span>
                </CustomModal>
            }
            <div style={contentStyle}>
                <Content>
                    <div style={colStyle} >
                        <Row gutter={[16, 8]}>
                            <Col span={12}>
                                <div>
                                    <Title level={2} style={{ marginLeft: "230px", width: "400px", marginTop: "50px", color: "white" }} >
                                        {ML('user')} {' '} {String(child.name)}!
                                    </Title>
                                </div>
                                <div style={cardStyle}>
                                    <Card style={{ background: "#4268B1  50.02%", border: "#4268B1", borderRadius: "30px", height: "450px" }}>
                                        <p style={lineStyle}>
                                            <text style={{ color: 'black' }}>{Number(child.amountOfMoney) / (Math.pow(10, 18))} ETH{/*<img src={TRY} style={tryStyle} />*/}</text>
                                        </p>
                                        <h1 style={{ textAlign: 'center', color: 'white', fontSize: '15px', opacity: '0.7', marginTop: '30px', marginBottom: '15px' }}> {ML('tarih')}</h1>
                                        <p style={textStyle}>
                                            <text style={{ color: '#EFAA45' }}>{date}</text>
                                        </p>
                                        <br />
                                        {/* {child?.releaseTime && child?.releaseTime > new Date() && <>
                                            <Countdown /*title="Day Level"  value={child?.releaseTime.getTime()} format="DD Gün HH:mm:ss kaldı" valueStyle={{ color: "white", width: "100%", textAlign: "center", }} />
                                        </>} */}

                                        <br />
                                        <Input style={inputStyle} placeholder={ML('miktar').props.children} onChange={(event: any) => setInput(event.target.value)} />
                                        <br />
                                        <Button style={buttonStyle} onClick={setClick} disabled={display} >{ML('geriCek')}</Button>
                                        <br />
                                        <Button style={buttonStyle2} onClick={onWithdrawAll} disabled={display} >{ML('tumParayıCek')}</Button>

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