
import { Layout, Checkbox, Button, Typography, Input } from 'antd';
import React from 'react';
import { Col, Row } from 'antd';
import { useState } from 'react';
import signinpng from '../images/signin.png';
import bg from '../images/bg2.png';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import logo from '../images/logo_infinity.png';
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';
import { addParent } from '../contract/functions';
import LangContext, { langs } from './LangugeContext';

declare var window: any;

const { Title } = Typography;

const contentStyle = {
  background: 'rgba(0,0,0,0)',
  width: '100%',
  height: '100%',
};

const navbarStyle = {
  display: 'flex',
  flexDirection: 'row',
  height: '10%',
  background: 'rgba(0,0,0,0)',
} as React.CSSProperties;

const colStyle = {
  background: 'rgba(0,0,0,0)',
  padding: 24,
  minHeight: 850
};

const imageStyle = {
  width: '600px',
  height: '600px',
  borderRadius: '15px',
  marginLeft: '120px',
  marginTop: '50px'
};

const inputStyle = {
  borderRadius: '15px',
  width: '350px',
  height: '40px',
  //background: '#0A103A', 
  color: 'black',
  border: `2px solid purple`,
};

const signInButtonStyle = {
  width: '350px',
  height: '40px',
  background: 'linear-gradient(180deg, #327FA3 41.67%, #1D1B65 100%)',
  color: '#fff',
  border: 'none',
};

const whitePlaceStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginLeft: '220'
};

const titleStyle = {
  color: '#fff',
  paddingTop: '.5%',
};

const logoStyle = {
  width: '86px',
  height: '71px',
  marginLeft: '1%',
  marginTop: '.5%',
  marginBottom: '.5%'
};




const { Header, Content } = Layout;

const Signin = () => {
  let rememberMe = false;
  let navigate = useNavigate();
  // check if user is parent or admin
  React.useEffect(() => {
    let address = sessionStorage.getItem('address');
    if (address === null) {
      navigate('/');
    }

  }, []);



  let users = [{ name: "", surname: "", role: "", balance: "", address: "", children: [{ name: "", surname: "", role: "", balance: "", address: "", age: "", receivalDate: "" }] }];
  const [balance, setBalance] = useState("");
  const [lang, setLang] = useState(langs.tr)
  const [selectedLanguage, setSelectedLanguage] = useState("tr")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")

  const switchLang = () => {
    setSelectedLanguage(selectedLanguage === "tr" ? "en" : "tr");
    lang === langs.tr ? setLang(langs.en) : setLang(langs.tr)
  }

  const onChange = (e: CheckboxChangeEvent) => {
    rememberMe = !rememberMe;
  };

  React.useEffect(() => {
    window.ethereum.request({
      method: 'eth_getBalance',
      params: [sessionStorage.getItem('address'), 'latest'],
    }).then((blnce: any) => {
      setBalance(ethers.utils.formatEther(blnce));
    }
    );

    // look if user is in database
    // let users = localStorage.getItem('users');
    // if (users) {
    //   let usersArr = JSON.parse(users);
    //   let address = sessionStorage.getItem('address');
    //   if (address === null) {
    //     address = "";
    //     navigate('/');
    //   }
    //   for (let i = 0; usersArr !== null ? i < usersArr.length : i < 0; i++) {
    //     if (usersArr) {
    //       if (usersArr[i].address.toLowerCase() === address.toLowerCase()) {
    //         console.log(usersArr[i].role);
    //         // remember me buton eklenmeli
    //         console.log(usersArr[i])
    //         sessionStorage.setItem('user', JSON.stringify(usersArr[i]));
    //         console.log(usersArr[i])

    //         usersArr[i].role === 'parent' ? navigate('/parent') : navigate('/ChildScreen');
    //       }
    //     }
    //   }
    // }

  }
    , []);

  async function OnSignIn() {

    await addParent(name, surname);

    if (name === "" || surname === "") {
      alert("Please fill all the fields")
    }
    else {
      // getBalance(sessionStorage.getItem('address'));

      let adrs = sessionStorage.getItem('address');
      if (adrs === null) {
        adrs = "";
      }
      const user = {
        name: name,
        surname: surname,
        role: 'parent',
        balance: balance,
        address: adrs,
        children: []
      }
      sessionStorage.removeItem('address');
      if (rememberMe) {
        localStorage.setItem("user", JSON.stringify(user));

      }
      else {
        sessionStorage.setItem("user", JSON.stringify(user));
      }


      let usrs = localStorage.getItem("users");

      if (usrs) {
        users = JSON.parse(usrs);
      }
      users.push(user);

      localStorage.setItem("users", JSON.stringify(users));


      if (user.role === 'parent') {
        window.location.href = "/parent";
      }
      else if (user.role === 'child') {
        window.location.href = "/childScreen";
      }

    }
  };


  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  };

  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSurname(e.target.value)
  };

  return (

    <LangContext.Provider value={lang}>

      <Layout style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'url(' + bg + ')',
      }}>
        <Header style={navbarStyle}>
          <img src={logo} alt="logo" style={logoStyle} />
          <h1 style={titleStyle}>Infinity</h1>
          <button style={{ marginLeft: '80%', background: 'rgba(0,0,0,0)', border: 'none' }} onClick={switchLang}> <u>Dil Değiştir </u> </button>

        </Header >
        <div style={contentStyle}>
          <Content>
            <div style={colStyle}>
              <Row gutter={[16, 8]}>
                <Col span={12}>
                  <img src={signinpng} style={imageStyle} />
                </Col>
                <Col span={12}>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Title style={{
                      color: '#0A103A', marginTop: '25'
                    }}>{lang.giris}</Title>
                  </div>
                  <div style={whitePlaceStyle}>
                    <Title level={5} style={{ color: '#0A103A', marginRight: '160px' }}>{lang.hosgeldin}</Title>
                  </div>
                  <br>
                  </br>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Title level={2} style={{ color: '#0A103A', marginRight: '230px' }}>{lang.ad}</Title>
                  </div>
                  <div style={whitePlaceStyle}>
                    <Input style={inputStyle} type='text' name='name' value={name} onChange={handleNameChange} />
                  </div>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Title level={2} style={{ color: '#0A103A', marginRight: '200px' }}>{lang.soyad}</Title>
                  </div>
                  <div style={whitePlaceStyle}>
                    <Input style={inputStyle} type='text' name='surname' value={surname} onChange={handleSurnameChange} />
                  </div>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Checkbox onChange={onChange} style={{ marginRight: '170px' }} >{lang.checkbox}</Checkbox>
                  </div>
                  <br>
                  </br>
                  <div style={whitePlaceStyle}>
                    <Button onClick={OnSignIn} size="large" style={signInButtonStyle} shape='round'>
                      {lang.kayıtol}</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Content>
        </div>
      </Layout>

    </LangContext.Provider>
  );
}

export default Signin;
