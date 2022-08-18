import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from "react-router-dom";

interface DataType {
   key: string;
   name: string;
   age: number;
   recieval_date: string;
   given_amount: number;
}

const mystyle = {
   marginTop: '5%',
   marginLeft: '10%',
   marginRight: '10%',
   padding: '10px',
};




const TableComponent = ({ data }: { data: Array<DataType> }) => {
   let navigate = useNavigate();
   let user: any = '';
   const navigator = () => {
      navigate('/'/*new url goes here */);
      return;
   };
   const columns: ColumnsType<DataType> =
      [
         {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a onClick={() => { /*user = { text };
            should add a label to find out user*/ navigator();
            }} > {text}</ a >
         },
         {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
         },
         {
            title: 'Recieval Date',
            dataIndex: 'recieval_date',
            key: 'recieval_date',
            render: (text) => (
               <Space size="middle">
                  <Tag color="blue">{text}</Tag>
                  <a>Change</a>
               </Space>

            ),

         },
         {
            title: 'Given Amount',
            dataIndex: 'given_amount',
            key: 'given_amount',
            render: (text) => (
               <Space size="middle">
                  <Tag color='blue'> {text} ETH</Tag>
                  <a>Change</a>
               </Space>
            ),
         },
      ]

   return (
      <div style={mystyle}>
         <Table columns={columns} dataSource={data} />
      </div>
   );
}



export default TableComponent;