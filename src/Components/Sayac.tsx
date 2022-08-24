import { Col, Row, Statistic } from 'antd';
import type { countdownValueType } from 'antd/es/statistic/utils';
import React from 'react';

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 5 + 1000 * 30; // Moment is also OK
const Sayac = () => {

  const onFinish = () => {
    console.log('finished!');
  };

  const onChange = (val: countdownValueType) => {
    if (4.95 * 1000 < val && val < 5 * 1000) {
      console.log('changed!');
    }
  };

    return (
        <Row gutter={16}>
        
        <Col span={24} style={{ marginTop: 32 }}>
          <Countdown /*title="Day Level" */ value={deadline} format="DD:HH:mm:ss" valueStyle={{color: "white", marginLeft: "170px", marginTop: "-50px",}}  />
        </Col>
       
      </Row>
    );
 }
 
 export default Sayac;
 