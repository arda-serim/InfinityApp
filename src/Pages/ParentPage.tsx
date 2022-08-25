import React, { useState } from "react";
import PieChartComponent from "../Components/PieChart";
import Navbar from "../Components/NavbarChildPage";
import TableComponent from "../Components/TableComponent";
import { Content } from "antd/lib/layout/layout";
import logo from "../images/logo_infinity.png";
import EthereumPrice from "../Components/EthereumPrice";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { getChilds, showBalanceofParent } from "../contract/functions";




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
      let tempRole = localStorage.getItem("role");
      if (tempRole) {
         setRole(tempRole);
      }
      if (localStorage.getItem("role") === "child") {
         navigate("/childpage");
      }

       if (localStorage.getItem("role") === undefined || localStorage.getItem("role") === null || localStorage.getItem("role") === 'none') {
           navigate("/");
        }

      const getChildHandler = async () => {

         const response = await getChilds();

         const tempData = response.map((child: any) => ({
            title: child.name,
            key: child.walletaddress,
            value: (Number(child.amountOfMoney) / (Math.pow(10,18)))
         }),
         )

         tempData.push({
            title: "You",
            value: (Number(await showBalanceofParent()) / Math.pow(10,18)),
            key: "you"
         })

         setData(tempData);

         const edit = response.map((child: any) => (
            {
               ...child,
               releaseTime: child.releaseTime.toNumber(),
               amountOfMoney: (Number(child.amountOfMoney) / (Math.pow(10,18))),
               key: child.walletaddress
            }),
         )

         setTableData(edit);
      }

      getChildHandler();

   }, [])


   return (
      <body style={pageStyle}>
         <Navbar />
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