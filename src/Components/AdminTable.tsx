import { DownOutlined } from '@ant-design/icons';
import { Input, TableColumnsType } from 'antd';
import { Badge, Dropdown, Menu, Space, Table } from 'antd';
import React, { useState } from 'react';
import { getChildWithAddress } from '../contract/functions';


const table = {
   position: 'relative',
   zIndex: '10',
} as React.CSSProperties;

const mystyle = {

   marginTop: '1%',
   marginLeft: '10%',
   marginRight: '10%',
   padding: '10px',
   background: 'rgba(255, 255, 255, 0)',

};

interface DataType {
   key: React.Key;
   name: string;
   platform: string;
   version: string;
   upgradeNum: number;
   creator: string;
   createdAt: string;
}

interface ExpandedDataType {
   key: React.Key;
   date: string;
   name: string;
   upgradeNum: string;
}


const AdminTable = (parentData: any) => {

   const [data, setData] = useState([]);

   React.useEffect(() => {
      const getChildDataHandler = async () => {
         parentData.parentData.forEach(async (x: any) => {
            const childAddresses = x.childs
            childAddresses.forEach(async (element: any) => {
               const child = await getChildWithAddress(element);

               const tempData = {
                  name: child.name,
                  amountOfMoney: (Number(child.amountOfMoney) / (Math.pow(10, 18))),
                  givenAmount: ((Number(child.amountOfMoney) + (Number(child.totalWithdrawnMoney))) / (Math.pow(10, 18))),
                  releaseTime: new Date(child.releaseTime * 1000).toLocaleDateString(),
               };
               // @ts-ignore
               x.childs = tempData;
            });
         });

      }
      getChildDataHandler();
   }, [parentData]);


   const expandedRowRender = () => {
      const columns: TableColumnsType<ExpandedDataType> = [
         {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center',
            width: '20%',
         },
         {
            title: 'Current Money(ETH)',
            dataIndex: 'amountOfMoney',
            key: 'amountOfMoney',
            align: 'center',
            width: '20%',
         },
         {
            title: 'Given Amount(ETH)',
            dataIndex: 'givenAmount',
            key: 'givenAmount',
            align: 'center',
            width: '20%',
         },
         {
            title: 'Recieval Date',
            dataIndex: 'releaseTime',
            key: 'releaseTime',
            align: 'center',
            width: '32.5%',
         },
      ];

      return <Table columns={columns} dataSource={data} pagination={false} />;
   };

   const columns: TableColumnsType<DataType> = [
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Balance(ETH)', dataIndex: 'balance', key: 'balance' },
      { title: 'Address', dataIndex: 'address', key: 'address' },
      { title: 'No of Children', dataIndex: 'noOfChildren', key: 'noOfChildren' },
   ];


   return (
      <div style={mystyle}>
         <Table
            columns={columns}
            expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
            dataSource={parentData.parentData}
            style={table}
            pagination={false}
         />
      </div >
   );
};

export default AdminTable;