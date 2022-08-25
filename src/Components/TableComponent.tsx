import React, { useState } from 'react';
import { Button, DatePicker, Input, Modal, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Navigate, useNavigate } from "react-router-dom";
import moment from 'moment';
import { sendMoneyToChild, withdrawMoneyByParentFromChild } from '../contract/functions';
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





const TableComponent = ({ data }: { data: Array<DataType> }) => {

   let navigate = useNavigate();
   const [error, setError] = useState();
   const [isModalVisible, setIsModalVisible] = useState(false);

   function onAddChild() {
      navigate("/childedit");
   }

   const [amount, setAmount] = useState();
   const [amountWithdraw, setAmountWithdraw] = useState();
   const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);



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
      try{await sendMoneyToChild(amount, address);
      window.location.reload();}
      catch(error:any) {
         setError((error.reason.split(":"))[1])
      }

   }

   const withdrawBackHandler = async (address: any) => {
      try {
         await withdrawMoneyByParentFromChild(amountWithdraw, address);
         window.location.reload();
      }
      catch (error: any) {
         setError(error.message)
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
            // render: (text) => (
            //    <Space size="middle">
            //       <DatePicker format={'DD/MM/YYYY'} defaultValue={moment(text, 'DD/MM/YYYY')} />
            //       <Button type="primary" /*onClick={onClickDate()}*/>Submit</Button>
            //    </Space>

            // ),
            align: 'center',
            width: '32.5%',
         },
         {
            title: 'Given Amount (ETH)',
            dataIndex: 'given_amount',
            key: 'given_amount',
            render: (text, record) => (
               <Space size="middle">
                  <Input.Group compact>
                     <Input style={{ width: '30%' }} defaultValue={0} onChange={amountInput} />
                     <Button type="primary" onClick={() => sendToChild(record.key)}>{ML('send')}</Button>
                     <Input style={{ width: '30%' }} defaultValue={0} onChange={amountInputToWithdraw} />
                     <Button style={{ marginLeft: '5%' }} type="primary" onClick={() => withdrawBackHandler(record.key)}>{ML('withdrawback')}</Button>
                  </Input.Group>
               </Space>
            ),
            align: 'center',
            width: '37.5%',
         },
      ]

   let addButton;
   if (!hasSelected) {
      addButton = <Button onClick={onAddChild} type="primary">{ML('cocukekle')}</Button>;
   }
   else {
      addButton = <Button type="primary" danger>{ML('cocuksil')}</Button>;
   }

   const clearError = () => {
      //@ts-ignore
      setError();
   }

   return (
      <div style={mystyle}>
         {
            error && <ModalComponent title="ERROR OCCURED" modalVisibility={true} message={error} style={{color: 'red'}} onClear={clearError} />
         }
         <div style={buttonStyle}>
            {addButton}
         </div>
         <Table style={table}
            bordered={true}
            rowSelection={{

               ...rowSelection,
            }}
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