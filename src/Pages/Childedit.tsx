import Navbar from '../Components/Navbar';
import React from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Col, Row, Slider } from 'antd';
import { useState } from 'react';
import { Button, Image, Space, Empty, Input, Radio, } from 'antd';
import logo from '../images/logo_infinity.png';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useHref, useNavigate } from 'react-router-dom';
// import vector from '../images/Vector.png';
import edit from '../images/editfoto.png';




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

  let navigate = useNavigate();

  // React.useEffect(() => {
  //   if (
  //     localStorage.getItem('user') === 'child2'
  //   ) {
  //     navigate("/");
  //   }
  // }, []);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [recievalDate, setRecievalDate] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [walletAddress, setWalletAddress] = useState('');


  function onChangeName(e: any) {
    setName(e.target.value);
  }

  function onChangeSurname(e: any) {
    setSurname(e.target.value);
  }

  function onChangeRecievalDate(e: any) {
    setRecievalDate(e.target.value);
  }

  function onChangeBirthDate(e: any) {
    setBirthDate(e.target.value);
  }

  function onChangeWalletAddress(e: any) {
    setWalletAddress(e.target.value);
  }

  function onSave() {
    let child = { name: name + ' ' + surname, recievalDate: recievalDate, birthDate: birthDate, address: walletAddress, balance: '0', role: 'child' }
    let user: any = undefined;
    let isSession = false;
    if (localStorage.getItem("user")) {
      user = localStorage.getItem("user");
      if (user)
        user = JSON.parse(user);
    }
    else if (sessionStorage.getItem("user")) {
      user = sessionStorage.getItem("user");
      if (user)
        user = JSON.parse(user);
      isSession = true;
    }

    if (user) {
      let users = localStorage.getItem("users");
      let usersArr;
      if (users) {
        usersArr = JSON.parse(users);
      }
      console.log('userrrrr', user)
      let index = usersArr.findIndex((x: any) => x.address === user.address);
      console.log(index);
      if (index > -1) {
        usersArr.splice(index, 1);
      }

      user.children.push(child);
      if (isSession)
        sessionStorage.setItem("user", JSON.stringify(user));
      else
        localStorage.setItem("user", JSON.stringify(user));

      usersArr.push(child);
      usersArr.push(user);
      localStorage.setItem("users", JSON.stringify(usersArr));

    }
    navigate("/parent");
  }

  const [size, setSize] = useState<SizeType>('large');

  return (
    <Layout style={{ background: 'linear-gradient(179.94deg, #0A368B 50.02%, #3B82A0 99.95%)' }}>

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
                    <Input style={inputStyle} onChange={onChangeName} placeholder="Name" />
                  </div>
                  <div >
                    <Input style={inputStyle} onChange={onChangeSurname} placeholder="Surname" />
                  </div>
                  <div >
                    <Input style={inputStyle} onChange={onChangeRecievalDate} placeholder="Recieval Date" />
                  </div>
                  <div >
                    <Input style={inputStyle} onChange={onChangeBirthDate} placeholder="Date of Birth" />
                  </div>
                  <div >
                    <Input style={inputStyle} onChange={onChangeWalletAddress} placeholder="Wallet adress of the child" />
                  </div>
                  <div>
                    <Button style={buttonStyle} onClick={onSave} type="primary" shape="round" size={size}>
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