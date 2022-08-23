import Navbar from '../Components/Navbar';
import React from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Col, Row, Slider } from 'antd';
import { useState } from 'react';
import { Button, Image, Space, Empty, Input, Radio, } from 'antd';
import logo from '../images/logo_infinity.png';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useNavigate } from 'react-router-dom';
// import vector from '../images/Vector.png';
import edit from '../images/editfoto.png';
import { addChild, withdrawMoneyByChild } from '../contract/functions';




//localStorage.setItem('user2' , 'parent')
//localStorage.setItem('user' , 'child2')

const inputStyle = {
  borderRadius: '15px',
  width: '350px',
  height: '40px',
  background: 'rgba(0,0,0,0)',
  color: 'white',
  marginLeft: '350px',
  marginTop: '10%'
};

const contentStyle = {
  witdh: '100%',
  height: '100%',
  padding: 24,
  minHeight: 850
};

const logoStyle = {
  width: '250px',
  height: '250px',
  display: 'flex',
  marginLeft: '220px',
  marginTop: '100px',
};

const buttonStyle = {
  background: 'linear-gradient(#327FA3,#1D1B65)',
  border: 'none',
  borderRadius: '15px',
  width: '150px',
  height: '40px',
  marginLeft: '450px',
  marginTop: '10%'
};

const fotoStyle = {
  marginLeft: '200px',
  marginTop: '100px'
};

const imageStyle = {
  width: '600px',
  height: '600px',
  borderRadius: '15px',
  marginRight: '50px',
  marginTop: '',
};

function Childedit() {

  // let navigate = useNavigate();

  // React.useEffect(() => {
  //   if (
  //     localStorage.getItem('user') === 'child2'
  //   ) {
  //     navigate("/");
  //   }
  // }, []);


  const [size, setSize] = useState<SizeType>('large');

  //@ts-ignore
  const [name, setName] = useState();
  const [releaseTime, setReleaseTime] = useState();
  const [address, setAddress] = useState();

  const [amountInputToWithdrawFromChild, setAmountInputToWithdrawFromChild] = useState();

  const addChildHandler = async () => {

    // @ts-ignore
    const date = new Date(releaseTime);

    // @ts-ignore
    const releaseTimeInSeconds = Math.floor(new Date().getTime() / 1000);

    await addChild(name, releaseTimeInSeconds, address);
  }


  const withdrawFromChildHandler = async () => {
    await withdrawMoneyByChild(amountInputToWithdrawFromChild);
  }

  return (
    <Layout style={{ background: 'linear-gradient(179.94deg, #0A368B 50.02%, #3B82A0 99.95%)' }}>

      <input style={{ width: '30%' }} onChange={(e: any) => setAmountInputToWithdrawFromChild(e.target.value)} />
      <button style={{ marginLeft: '5%' }} /*onClick={onClickSendAll()}*/ onClick={withdrawFromChildHandler}>Withdraw(Child)</button>

      <div>
        <Navbar />
      </div>
      <div style={contentStyle}>
        <Content>
          <div>
            <Row gutter={[16, 8]}>
              <div>
                <Col span={12}>
                  <div style={fotoStyle}>
                    <img src={edit} alt="edit" style={{ width: '600px', height: '500px' }} />
                  </div>
                </Col>
              </div>
              <div>
                <Col span={12}>
                  <div style={{ marginTop: '25%' }} >
                    <Input style={inputStyle} placeholder="Name" onChange={(e: any) => setName(e.target.value)} />
                  </div>
                  {/* <div >
                    <Input style={inputStyle} placeholder="Surname"/>
                  </div> */}
                  <div >
                    <Input style={inputStyle} placeholder="Release time" type="date" onChange={(e: any) => setReleaseTime(e.target.value)} />
                  </div>
                  {/* <div >
                    <Input style={inputStyle} placeholder="Date of birth"/>
                  </div> */}
                  <div >
                    <Input style={inputStyle} placeholder="Wallet adress of child" onChange={(e: any) => setAddress(e.target.value)} />
                  </div>
                  <div>
                    <Button style={buttonStyle} type="primary" shape="round" size={size} onClick={addChildHandler}>
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

export default Childedit;