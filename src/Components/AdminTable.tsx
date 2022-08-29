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
   balance: string;
   address: string;
   childs: number;
   numOfChildren: string;
}

interface ExpandedDataType {
   key: React.Key;
   name: string;
   amountOfMoney: string;
   givenAmount: string;
   releaseTime: string;
}


const AdminTable = (parentData: any) => {

   const [data, setData] = useState();
   //const [tempChildren, setTempChildren] = useState([]);
   let tempChildren: any = [];
   let children: any = [];

   React.useEffect(() => {
      const getChildDataHandler = async () => {
         console.log('xxxxx', parentData.parentData.length);
         for (let index = 0; index < parentData.parentData.length; index++) {
            const childAddresses = parentData.parentData[index].childs
            console.log('asfasfsas', childAddresses.length);

            for (let i = 0; i < childAddresses.length; i++) {
               const child = await getChildWithAddress(childAddresses[i]);
               const tempData = {
                  key: child.walletaddress,
                  name: child.name,
                  amountOfMoney: (Number(child.amountOfMoney) / (Math.pow(10, 18))),
                  givenAmount: ((Number(child.amountOfMoney) + (Number(child.totalWithdrawnMoney))) / (Math.pow(10, 18))),
                  releaseTime: new Date(child.releaseTime * 1000).toLocaleDateString(),
               };


               // @ts-ignore
               tempChildren.push(tempData);
               console.log(index, tempChildren);

            }
            // @ts-ignore
            children.push(tempChildren);
            console.log(children)
            // @ts-ignore
            tempChildren = [];
         }



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

      return <Table columns={columns} dataSource={children} pagination={false} />;
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
            expandable={{ expandedRowRender }}
            dataSource={parentData.parentData}
            style={table}
            pagination={false}
         />
      </div >
   );
};

export default AdminTable;
