import Navbar from '../Components/Navbar';
import React from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Col, Row, Slider } from 'antd';
import { useState } from 'react';
import { Button, Image, Space ,Empty ,Input ,Radio,} from 'antd';
import logo from '../images/logo_infinity.png';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import vector from '../images/Vector.png';

const inputStyle = {
    borderRadius: '15px', 
    width: '350px',
    height: '40px',
    background: 'rgba(0,0,0,0)',
    color : 'white',
    marginLeft : '450px',
    marginTop: '10%'
  };

const contentStyle={
    background: 'linear-gradient(to left, #2F3C9E, #253184, #192364, #11194D, #0C1340, #0A113B, #000020)',
    witdh : '100%',
    height : '100%',
    padding: 24,
    minHeight: 850
};

const logoStyle={
    width : '250px',
    height : '250px',
    display: 'flex',
     marginLeft:'220px',
     marginTop : '100px',
};

const buttonStyle={
    background: 'linear-gradient(#327FA3,#1D1B65)',
    border : 'none',
    borderRadius: '15px', 
    width: '150px',
    height: '40px',
    marginLeft : '550px',
    marginTop: '10%'
};

const fotoStyle={
    marginLeft : '400px',
    width: '200px',
    marginTop: '150px'
};

const imageStyle = {
    width: '600px',
    height: '600px',
    borderRadius: '15px',
    marginRight: '50px',
    marginTop: '',
  };

function Childedit(){
   
    const [size, setSize] = useState<SizeType>('large');

    return(
        <Layout style={{ backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage :'url('+vector+')',}}>
            <div>
            <Navbar/>
            </div>
            <div style={contentStyle}>
              <Content>
                <div>
                <Row gutter={[16, 8]}>
                    <div>
                    <Col span={12}>
                        <div style = {fotoStyle}>
                        </div>
                    </Col>
                    </div>
                   <div>
                   <Col span={12}>
                   <div style={{marginTop: '30%'}} >
                    <Input style={inputStyle} placeholder="Name" />
                  </div>
                  <div >
                    <Input style={inputStyle} placeholder="Surname"/>
                  </div>
                  <div >
                    <Input style={inputStyle} placeholder="Release time"/>
                  </div>
                  <div >
                    <Input style={inputStyle} placeholder="Date of birth"/>
                  </div>
                  <div >
                    <Input style={inputStyle} placeholder="Wallet adress of child"/>
                  </div>
                  <div>
                  <Button style={buttonStyle} type="primary" shape="round"  size={size}>
                    save
                  </Button>
                  </div>
                    </Col>
                   </div>
                </Row> 
                </div>
              </Content> 
            </div>    
        </Layout>
    );
} 

export default Childedit ;