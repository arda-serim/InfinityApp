import React from 'react';
import Navbar from '../Components/Navbar';
import AdminTable from '../Components/AdminTable';
import { Content } from 'antd/lib/layout/layout';
import { getAllParents } from '../contract/functions';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../Components/AdminNavbar';



const pageStyle = {
   background: 'linear-gradient(to bottom, #0A368B,#3B82A0)',
   // full page
   minHeight: '100vh',
   minWidth: '100vw',

};

const AdminPage = () => {
   let navigate = useNavigate();
   const role = localStorage.getItem('role');

   const [tableData, setTableData] = React.useState([]);

   React.useEffect(() => {
      if (role === 'parent') {
         navigate('/parent');
      } else if (role === 'child') {
         navigate('/childpage');
      } else if (role === 'none' || role === null || role === undefined) {
         navigate('/');
      }

      const getParentHandler = async () => {
         const response = await getAllParents();

         const tempData = response.map((parent: any) => ({
            key: parent.walletaddress,
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
         <AdminNavbar />
         <Content>
            <AdminTable parentData={tableData} />
         </Content>
      </body >
   )
}

export default AdminPage;