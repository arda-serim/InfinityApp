import React from "react";
import PieChartComponent from "../Components/PieChart";
import Navbar from "../Components/NavbarChildPage";
import TableComponent from "../Components/TableComponent";
import { Content } from "antd/lib/layout/layout";
import logo from "../images/logo_infinity.png";
import EthereumPrice from "../Components/EthereumPrice";
import { useNavigate } from "react-router-dom";
import moment from "moment";




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
   // check if user is parent or admin
   let user: any = undefined;
   React.useEffect(() => {
      if (localStorage.getItem("user")) {
         user = localStorage.getItem("user");
         if (user)
            user = JSON.parse(user);
      }
      else if (sessionStorage.getItem("user")) {
         user = sessionStorage.getItem("user");
         if (user)
            user = JSON.parse(user);

      }
      if (user === undefined) {
         navigate("/");
      }
      else if (user.role !== "parent") {
         navigate("/");
      }
   }, []);

   if (localStorage.getItem("user")) {
      user = localStorage.getItem("user");
      if (user)
         user = JSON.parse(user);
   }
   else if (sessionStorage.getItem("user")) {
      user = sessionStorage.getItem("user");
      if (user)
         user = JSON.parse(user);
   }
   console.log(user)

   const data = [];
   const tableData = [];
   let children;

   if (user !== undefined)
      children = user.children;
   if (children !== undefined) {
      for (let i = 0; i < children.length; i++) {
         if (children[i].balance !== undefined && children[i].balance !== null) {
            data.push({
               title: children[i].name,
               value: Number(children[i].given_amount),
               key: i.toString(),
            });
         }
         tableData.push({
            key: i.toString(),
            name: children[i].name,
            age: children[i].age,
            recieval_date: children[i].recievalDate,
            given_amount: children[i].balance !== undefined ? children[i].balance : 0,
         });
      }
   }

   data.push({
      key: 'parent',
      title: 'You',
      value: Number(user.balance),
   });


   return (
      <body style={pageStyle}>
         <Navbar />
         <Content>
            <div style={topSideStyle}>
               <PieChartComponent data={data} />
               <EthereumPrice />
            </div>
            <TableComponent data={tableData} />
         </Content>
      </body>
   );
}

export default ParentPage;