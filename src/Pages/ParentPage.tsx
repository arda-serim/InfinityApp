import React, { useState } from "react";
import PieChartComponent from "../Components/PieChart";
import Navbar from "../Components/NavbarChildPage";
import TableComponent from "../Components/TableComponent";
import { Content } from "antd/lib/layout/layout";
import logo from "../images/logo_infinity.png";
import EthereumPrice from "../Components/EthereumPrice";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { getChilds, getRole, showBalanceofParent } from "../contract/functions";
import test4 from '../images/Vector.png'

const pageStyle = {
   background: 'linear-gradient(to bottom, #0A368B,#3B82A0)',
   // full page
   minHeight: '100vh',
   minWidth: '100vw',

};

const topSideStyle = {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-evenly',
   alignItems: 'center',
} as React.CSSProperties;


const ParentPage = () => {
   let navigate = useNavigate();

   const [tableData, setTableData] = useState([]);
   const [data, setData] = useState([]);
   const [role, setRole] = useState("");

   React.useEffect(() => {

        const roleFunc = async() => {
         const role = await getRole();
         if (role === 'admin') {
            navigate('/admin');
         } else if (role === 'child') {
            navigate('/childpage');
         } else if (role === 'none' || role === null || role === undefined) {
            navigate('/');
         }
      }
   
      roleFunc();

      const getChildHandler = async () => {

         const response = await getChilds();

         const tempData = response.map((child: any) => ({
            title: child.name,
            key: child.walletaddress,
            value: (Number(child.amountOfMoney) / (Math.pow(10, 18)))
         }),
         )

         tempData.push({
            title: "You",
            value: (Number(await showBalanceofParent()) / Math.pow(10, 18)),
            key: "you"
         })

         setData(tempData);

         const edit = response.map((child: any) => (
            {
               ...child,
               releaseTime: new Date(child.releaseTime * 1000).toLocaleDateString(),
               amountOfMoney: (Number(child.amountOfMoney) / (Math.pow(10, 18))),
               givenAmount: ((Number(child.amountOfMoney) + Number(child.totalWithdrawnMoney)) / (Math.pow(10, 18))),
               key: child.walletaddress
            }),
         )

         setTableData(edit);
      }

      getChildHandler();

   }, [])

   const imageStyle = {
      width: '2000px',
      height: '800px',
      borderRadius: '15px',
     // marginLeft: '-15%',
     // marginTop: '-13%',
      zIndex : '0',
      position : 'absolute',
      right :'0',
      opacity:'0.5'
   } as React.CSSProperties;
   return (
      <body style={pageStyle}>
         <Navbar />
         <img src={test4} style={imageStyle}></img>

         {<Content>
            <div style={topSideStyle}>
               <PieChartComponent data={data} />
               <EthereumPrice />
            </div>
            <TableComponent data={tableData} />
         </Content>}
      </body>
   );
}

export default ParentPage;