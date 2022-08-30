import Navbar from '../Components/NavbarChildPage';
import React from 'react';
import Layout, { Content } from 'antd/lib/layout/layout';
import { Col, Row, Slider, Spin, Form, Select, DatePicker } from 'antd';
import { useState } from 'react';
import { Button, Image, Space, Empty, Input, Radio, } from 'antd';
import logo from '../images/logo_infinity.png';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { useNavigate } from 'react-router-dom';
// import vector from '../images/Vector.png';
import edit from '../images/editfoto.png';
import { addChild, withdrawMoneyByChild } from '../contract/functions';
import { ML } from '../App';
import CustomModal from '../Components/CustomModal';




//localStorage.setItem('user2' , 'parent')
//localStorage.setItem('user' , 'child2')

const inputStyle = {
  borderRadius: '15px',
  width: '350px',
  height: '40px',
  background: 'rgba(0,0,0,0)',
  color: 'white',
  marginLeft: '230px',
  marginTop: '10%'
};

const contentStyle = {
  witdh: '100vw',
  height: '100vh',
  minHeight: '700px'
};

const logoStyle = {
  width: '250px',
  height: '250px',
  display: 'flex',
  marginLeft: '220px',
  marginTop: '100px',
};

const buttonStyle = {
  background: 'linear-gradient(180deg, #FF980E 41.67%, #FDB137 100%)',
  border: 'none',
  borderRadius: '15px',
  width: '150px',
  height: '40px',
  margin: '10px'
};
const buttonStyle1 = {
  background: 'linear-gradient(180deg, red 41.67%, #FDB137 100%)',
  border: 'none',
  borderRadius: '15px',
  width: '150px',
  height: '40px',
  margin: '10px'
};

const fotoStyle = {
  marginLeft: '200px',
  marginTop: '50px'
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


  React.useEffect(() => {
    if (
      localStorage.getItem('role') !== 'parent'
    ) {
      navigate("/");
    }
  }, []);

  const [form] = Form.useForm();

  const [size, setSize] = useState<SizeType>('large');

  //@ts-ignore
  const [name, setName] = useState();
  const [releaseTime, setReleaseTime] = useState();
  const [address, setAddress] = useState();

  const [amountInputToWithdrawFromChild, setAmountInputToWithdrawFromChild] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();



  const cancelAddingChildHandler = () => {
    navigate('/parent');
  }
  const clearError = () => {
    //@ts-ignore
    setError();
  }


  const onFinish = async (values: any) => {
    console.log('Success:', values);
    // walletAddress releaseTime name
    // @ts-ignore
    const date = new Date(values.releaseTime);

    // @ts-ignore
    const releaseTimeInSeconds = Math.floor(date.getTime() / 1000);

    try {
      setIsLoading(true);
      await addChild(values.name, releaseTimeInSeconds, values.walletAddress);
      setIsLoading(false);
      navigate("/parent");
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

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Layout style={{ background: 'linear-gradient(179.94deg, #0A368B 50.02%, #3B82A0 99.95%)' }}>
      {
        isLoading && <CustomModal show header={ML('loading')} footer={<Spin />}>
          <div>
            <span style={{ margin: '16px' }}>
              {ML('childAdding')}
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
      <div>
        <Navbar />
      </div>
      {/* yukarıdaki navbar sayfanın %10 luk kısmını doldurğu için burada 90 lık ksımı dolduruyoruz */}
      <Row style={{ height: "90vh" }}>
        {/* sayfayı ikiye bölüyorum */}
        <Col span={12} >
          {/* Burada içerisine attığım resmin justify ile sağa sona gelmesini align ile dikeyde ortalamaya height 100% ile de bir yukarıdaki row'da verdim parentin tamamını kapsamasını sağlıyorum. */}
          <Row justify='end' align='middle' style={{ height: "100%" }}>
            <img src={edit} alt="edit" style={{ width: '530px', height: '400px' }} />
          </Row>
        </Col>
        <Col span={12}>
          <Form
            name="basic"
            // solda label kısımlarına 24 te 8 ayırıyorum
            labelCol={{ span: 8 }}
            // sağda input kısımlarına 24 te 12 ayırıyorum kalan 4 lük kısım sola geçiyor
            wrapperCol={{ span: 12 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={<span style={{ color: "white" }}>{ML('ad').props.children}</span>}
              name="name"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: "white" }}>{ML('erisimTarihi').props.children}</span>}
              name="releaseTime"
              rules={[{ required: true, message: ML('input2') }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>

            <Form.Item
              label={<span style={{ color: "white" }}>{ML('walletAdres').props.children}</span>}
              name="walletAddress"
              rules={[
                { required: true, message: ML('input3') },
                { min: 42, message: ML('input4') }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button style={buttonStyle1} type="primary" shape="round" size={size} onClick={cancelAddingChildHandler}>
                {ML('vazgec')}
              </Button>
              <Button style={buttonStyle} type="primary" htmlType="submit" shape="round" size={size} >
                {ML('kaydet')}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Layout>
  );
}

export default Childedit;