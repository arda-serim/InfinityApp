import React, { useState } from 'react';
import { Button, DatePicker, Input, Modal, Space, Spin, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Navigate, useNavigate } from "react-router-dom";
import moment from 'moment';
import { changeReleaseTime, sendMoneyToChild, withdrawMoneyByParentFromChild } from '../contract/functions';
import { ML } from '../App';
import ModalComponent from './ModalComponent';

interface DataType {
   key: string;
   name: string;
   age: number;
   recieval_date: string;
   given_amount: string;
}

const mystyle = {

   marginTop: '1%',
   marginLeft: '10%',
   marginRight: '10%',
   padding: '10px',
   background: 'rgba(255, 255, 255, 0)',

};

const buttonStyle = {
   position: 'relative',
   float: 'right',
   paddingTop: '5px',
   zIndex: '12',
   marginBottom: '10px',
} as React.CSSProperties;

const table = {
   position: 'relative',
   zIndex: '10',
} as React.CSSProperties;


const signInButtonStyle = {
   height: '32px',
   background: 'linear-gradient(180deg, #FF980E 41.67%, #FDB137 100%)',
   color: '#fff',
   border: 'none',
   marginLeft: '-20%',
};

const buttonsStyle = {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-evenly',
   alignItems: 'center',
} as React.CSSProperties;


const TableComponent = ({ data }: { data: Array<DataType> }) => {

   let navigate = useNavigate();
   const [error, setError] = useState();
   const [date, setDate] = useState();

   function onAddChild() {
      navigate("/childedit");
   }

   const [amount, setAmount] = useState();
   const [amountWithdraw, setAmountWithdraw] = useState();
   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
   const [isLoading, setIsLoading] = useState(false);


   const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
   };

   const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
   };
   const hasSelected = selectedRowKeys.length > 0;

   const amountInput = (e: any) => {
      setAmount(e.target.value)
   }

   const amountInputToWithdraw = (e: any) => {
      setAmountWithdraw(e.target.value);
   }

   const sendToChild = async (address: any) => {
      try {
         setIsLoading(true);
         await sendMoneyToChild(amount, address);
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

   const withdrawBackHandler = async (address: any) => {
      try {
         setIsLoading(true);
         await withdrawMoneyByParentFromChild(amountWithdraw, address);
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

   const onClickDate = async (address: any) => {
      try {
         // @ts-ignore
         const tempDate = new Date(date);

         console.log(tempDate);
         // @ts-ignore
         const releaseTimeInSeconds = Math.floor(tempDate.getTime() / 1000);

         console.log(releaseTimeInSeconds, '  date  ', address);
         setIsLoading(true);
         await changeReleaseTime(address, releaseTimeInSeconds);
         setIsLoading(false);
      }
      catch (error: any) {
         console.log('heree');
         // const activeLanguage = localStorage.getItem("i18nextLng");
         // const errorMessage = (error.reason.split(":"))[1]
         // const messageEN = errorMessage.split("TR")[0]
         // const messageTR = errorMessage.split("TR")[1]
         // console.log("en: ", messageEN);
         // console.log("TR: ", messageTR);

         // if (activeLanguage === 'en') {
         //    setError(messageEN)
         // } else {
         //    setError(messageTR)
         // }
         setIsLoading(false);
      }
   }


   const columns: ColumnsType<DataType> =
      [
         {
            title: ML('ad'),
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            width: '10%',
         },
         {
            title: ML('adres'),
            dataIndex: 'key',
            key: 'key',
            render: (dataIndex) => (
               <>
                  <a href={'https://rinkeby.etherscan.io/address/' + dataIndex} target="_blank" style={{ color: 'white', textDecoration: 'underline' }}>{dataIndex}</a>
                  <Button href={'https://rinkeby.etherscan.io/address/' + dataIndex} target="_blank" shape='round' type='primary' style={{ textAlign: 'center', background: 'linear-gradient(180deg, #FF980E 41.67%, #FDB137 100%)', color: '#fff' }}
                  >
                     {ML('block')}
                  </Button>
               </>
            ),
            align: 'center',
            width: '10%',
         },
         {
            title: ML('para'),
            dataIndex: 'amountOfMoney',
            key: 'amountOfMoney',
            align: 'center',
            width: '10%',
         },
         {
            title: ML('gönderilen'),
            dataIndex: 'givenAmount',
            key: 'givenAmount',
            align: 'center',
            width: '10%',
         },
         {
            title: ML('erisimTarihi'),
            dataIndex: 'releaseTime',
            key: 'releaseTime',
            render: (text, record) => (
               <Space size="middle" style={{ display: 'flex', flexDirection: 'column' }}>
                  <DatePicker format={'DD/MM/YYYY'} style={{ borderRadius: '32px' }} defaultValue={moment(text, 'DD/MM/YYYY')} onChange={(date: any) => {
                     // const d = new Date(date);
                     setDate(date);
                  }} />
                  <Button type="primary" style={{ textAlign: 'center', background: 'linear-gradient(180deg, #FF980E 41.67%, #FDB137 100%)', color: '#fff' }} shape='round' onClick={() => onClickDate(record.key)} >{ML('degistir')}</Button>
               </Space>

            ),
            align: 'center',
            width: '32.5%',
         },
         {
            title: ML('tutar'),
            dataIndex: 'given_amount',
            key: 'given_amount',
            render: (text, record) => (
               <Space size="middle" style={buttonsStyle}>
                  <div style={{ display: 'flex', flexDirection: 'column', }}>
                     <Input style={{ width: '100%', textAlign: 'center', borderRadius: '30px' }} defaultValue={0} onChange={amountInput} />
                     <Button type="primary" style={{ textAlign: 'center', background: 'linear-gradient(180deg, #FF980E 41.67%, #FDB137 100%)', color: '#fff' }} shape='round' onClick={() => sendToChild(record.key)}>{ML('send')}</Button>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', }}>
                     <Input style={{ width: '100%', textAlign: 'center', borderRadius: '30px' }} defaultValue={0} onChange={amountInputToWithdraw} />
                     <Button type="primary" style={{ textAlign: 'center', background: 'linear-gradient(180deg, #FF980E 41.67%, #FDB137 100%)', color: '#fff' }} shape='round' onClick={() => withdrawBackHandler(record.key)}>{ML('withdrawback')}</Button>
                  </div>
               </Space >
            ),
            align: 'center',
            width: '37.5%',
         },
      ]

   const clearError = () => {
      //@ts-ignore
      setError();
   }

   return (
      <div style={mystyle}>
         {
            isLoading && <ModalComponent title={ML('loading')} modalVisibility={true} message={<Spin />} style={{ textAlign: 'center' }} />
         }
         {
            error && <ModalComponent title={ML('errorOccured')} modalVisibility={true} message={error} style={{ color: 'red' }} onClear={clearError} buttons={true} />
         }
         <div style={buttonStyle}>
            <Button onClick={onAddChild} style={signInButtonStyle} shape='round' type="primary">{ML('cocukekle')}</Button>
         </div>
         <Table style={table}
            bordered={true}
            pagination={false}
            columns={columns} dataSource={data} />
      </div>
   );
}


export default TableComponent;