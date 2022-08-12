import React from 'react';
import Navbar from '../Components/Navbar';
import { Col, Row, Layout, Card } from 'antd';
import icon from '../images/ethereum.png';
import { Typography } from 'antd';
import test from '../images/homeImage.png';
import { title } from 'process';


const { Content } = Layout;
const { Title } = Typography;

const cardStyle = {
   padding: '5%',
   background: '#ffffff',
};

const iconStyle = {
   width: '15px',
   height: '15px'
};

const colStyle = {
   background: 'white',
   padding: 24,
   minHeight: 580
};

const card = {
   display: 'flex',
   flexDirection: 'column',
   width: '500px',
   height: '300px',
   borderRadius: '15px',
   boxShadow: '0px 0px 10px rgb(0, 0, 0, 0.1)',
   backgroundColor: '#0B0150',
   color: '#fff',

} as React.CSSProperties;

const insideCard = {
   display: 'flex',
   flexDirection: 'column',
   height: '100%',
   width: '100%',
   marginTop: '10%',
} as React.CSSProperties;

const imageStyle = {
   width: '80%',
   height: '90%',
   borderRadius: '15px',
   marginTop: '3.5%',
};

function HomePage() {
   return (
      <Layout>
         <Navbar></Navbar> {/* Navbar component*/}
         <Content>
            <div style={colStyle}>
               <Row gutter={[24, 8]}>
                  <Col span={12} >
                     <div style={cardStyle}>
                        <Title level={2}>Welcome</Title>
                        <p>Infinity is the investing app for your child. If you want to
                           leave a legacy to your children, join us now. </p>
                     </div>
                     <div style={cardStyle}>
                        <Card bordered={true} style={card}>
                           <h1 style={{ color: '#fff' }}>What You Need</h1>
                           <div style={insideCard}>
                              <p > <img style={iconStyle} src={icon} />
                                 You need to have a <a href='https://metamask.io/'>metamask</a> wallet.
                              </p>
                              <br /> <br />
                              <p  > <img style={iconStyle} src={icon} />
                                 You must have a certain amount of <a href='https://ethereum.org/en/'>ethereum</a> in your wallet.
                              </p>
                           </div>
                        </Card>
                        <iframe width="420" height="315"
                           src="https://www.youtube.com/embed/YVgfHZMFFFQ">
                        </iframe>
                     </div>
                  </Col>

                  <Col span={12}>
                     <img src={test} style={imageStyle} />
                  </Col>
               </Row>
            </div>
         </Content >
      </Layout >
   );
}


export default HomePage;