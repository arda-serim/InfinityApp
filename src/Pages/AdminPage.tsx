import React from 'react';
import Navbar from '../Components/Navbar';
import AdminTable from '../Components/AdminTable';
import { Content } from 'antd/lib/layout/layout';
import { getAllParents } from '../contract/functions';



const pageStyle = {
   background: 'linear-gradient(to bottom, #0A368B,#3B82A0)',
   // full page
   minHeight: '100vh',
   minWidth: '100vw',

};

const AdminPage = () => {

   const [tableData, setTableData] = React.useState([]);

   React.useEffect(() => {


      const getParentHandler = async () => {
         const response = await getAllParents();

         const tempData = response.map((parent: any) => ({

            name: parent.name + " " + parent.surname,
            balance: (Number(parent.currentBalance) / (Math.pow(10, 18))),
            address: parent.walletaddress,
            noOfChildren: Number(parent.childIndex),
            childs: parent.childs,
         }),
         )
         setTableData(tempData);
      }
      getParentHandler();
   }, []);


   return (
      <body style={pageStyle} >
         <Navbar />
         <Content>
            <AdminTable parentData={tableData} />
         </Content>
      </body >
   )
}

export default AdminPage;