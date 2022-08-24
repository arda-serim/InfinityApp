import Navbar from '../Components/NavbarChildPage';
import Sayac from '../Components/Sayac';
import React, { useEffect } from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Col, Row, Slider, Typography , Card, Statistic} from 'antd'; 
import { useState } from 'react';
import { Button, Image, Space ,Empty ,Input ,Radio,} from 'antd';
import logo from '../images/logo_infinity.png';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useNavigate } from 'react-router-dom';
import picture from '../images/newPicture.png';
import edit from '../images/editfoto.png';
import TRY from '../images/pngwing.com.png';
import type { countdownValueType } from 'antd/es/statistic/utils';
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

const tryStyle ={
    width: "25px",
    paddingBottom: "5px",
}
export interface child {
    name: string;
    releaseTime: Date;
    address: string;

}
const {Title} = Typography;


const ChildPage = ()  => {
    const [child, setChild] = useState<child | undefined> (undefined)

    useEffect(() => {
    setChild({
        name: "sude",
        releaseTime: new Date("2023-08-23"),
        address: "ev ev ",
    })
    }, [ ])
    
    const onFinish = () => {


        console.log('finished!');
      };
    return (

        <Layout style={{ background: 'linear-gradient(179.94deg, #0A368B 50.02%, #3B82A0 99.95%)'}}>
            <div>
        
                <Navbar/>
                
            </div>
            <div style={contentStyle}>
                <Content>
                    <div style={colStyle} >
                        <Row gutter={[16,8]}>
                                <Col span={12}>
                                    <div>
                                    <Title level={2} style={{marginLeft: "260px", width:"400px", marginTop:"50px", color:"white"}} >
                                        Welcome User!
                                    </Title>
                                    </div>
                                    <div style={cardStyle}>
                                        <Card style= {{background: "#4268B1  50.02%", border:"#4268B1" ,borderRadius: "30px", height: "450px"}}>
                                        <p style={lineStyle}>
                                             <text style={{ color: 'black' }}>18,100,650 <img src={TRY} style={tryStyle} /></text>

                                        </p>
                                        <p style={textStyle}>
                                             <text style={{ color: '#FFFFFF', opacity:"0.18" }}>Release Time: 18.08.2024 </text>
                                        </p>
                                        <br />
                                        { child?.releaseTime && child?.releaseTime>new Date() && <>
                                            <Countdown /*title="Day Level" */ value={child?.releaseTime.getTime()} format="DD Gün HH:mm:ss kaldı" valueStyle={{color: "white", width: "100%", textAlign: "center",}}  />
                                        </>}

                                        <br />
                                        <Input style={inputStyle} />
                                        <br />
                                        <Button style={buttonStyle}>Withdraw Money</Button>
                                        <br />
                                        <Button style={buttonStyle2}>Withdraw All The Money</Button>

                                        </Card>
                                        
                                    </div>
                                </Col>
                                <Col span={12} >
                                    <img src={picture} style={imageStyle}/>
                                </Col>
                        </Row>
                    </div>

                </Content>
            </div>
        </Layout>


    );
}






export default ChildPage;