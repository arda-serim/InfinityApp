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
   const [date, setDate] = useState('');

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
         setError((error.reason.split(":"))[1])
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
         setError((error.reason.split(":"))[1])
         setIsLoading(false);
      }
   }

   const onClickDate = async (date: any, address: any) => {
      try {
         console.log(date, '  date  ', address);

         await changeReleaseTime(address, date);
      }
      catch (error: any) {
         setError((error.reason.split(":"))[1])
         setIsModalVisible(true);
      }
   }


   const columns: ColumnsType<DataType> =
      [
         {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            width: '10%',
         },
         {
            title: 'Current Money(ETH)',
            dataIndex: 'amountOfMoney',
            key: 'amountOfMoney',
            align: 'center',
            width: '10%',
         },
         {
            title: 'Given Amount(ETH)',
            dataIndex: 'givenAmount',
            key: 'givenAmount',
            align: 'center',
            width: '10%',
         },
         {
            title: 'Recieval Date',
            dataIndex: 'releaseTime',
            key: 'releaseTime',
            render: (text, record) => (
               <Space size="middle">
                  <DatePicker format={'DD/MM/YYYY'} defaultValue={moment(text, 'DD/MM/YYYY')} onChange={(date: any) => {
                     const d = new Date(date).toLocaleDateString();
                     setDate(d);
                  }} />
                  <Button type="primary" style={signInButtonStyle} shape='round' onClick={() => onClickDate(date, record.key)} >Save</Button>
               </Space>

            ),
            align: 'center',
            width: '32.5%',
         },
         {
            title: 'Given Amount (ETH)',
            dataIndex: 'given_amount',
            key: 'given_amount',
            render: (text, record) => (
               <Space size="middle" style={buttonsStyle}>
                  <Input style={{ width: '60%', textAlign: 'center' }} defaultValue={0} onChange={amountInput} />
                  <Button type="primary" style={signInButtonStyle} shape='round' onClick={() => sendToChild(record.key)}>{ML('send')}</Button>
                  <Input style={{ width: '60%', textAlign: 'center' }} defaultValue={0} onChange={amountInputToWithdraw} />
                  <Button type="primary" style={signInButtonStyle} shape='round' onClick={() => withdrawBackHandler(record.key)}>{ML('withdrawback')}</Button>
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
            isLoading && <ModalComponent title="LOADING..." modalVisibility={true} message={<Spin />} style={{ textAlign: 'center' }} />
         }
         {
            error && <ModalComponent title="ERROR OCCURED" modalVisibility={true} message={error} style={{ color: 'red' }} onClear={clearError} buttons={true} />
         }
         <div style={buttonStyle}>
            <Button onClick={onAddChild} style={signInButtonStyle} shape='round' type="primary">{ML('cocukekle')}</Button>
         </div>
         <Table style={table}
            bordered={true}
            pagination={
               {
                  hideOnSinglePage: true,
                  pageSize: 3,
                  position: ['bottomCenter'],
                  responsive: true,
               }}
            columns={columns} dataSource={data} />
      </div>
   );
}


export default TableComponent;