import React from "react";
import PieChartComponent from "../Components/PieChart";
import Navbar from "../Components/Navbar";
import TableComponent from "../Components/TableComponent";
import { Content } from "antd/lib/layout/layout";
import logo from "../images/logo_infinity.png";
import EthereumPrice from "../Components/EthereumPrice";
import { useNavigate } from "react-router-dom";




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
   React.useEffect(() => {
      let user = undefined;
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


   const data = [
      {
         title: "Child 1",
         value: 10,
         color: "#00ff00",
         key: "0",
      },
      {
         title: "Child 2",
         value: 8,
         color: "#ff0000",
         key: "1",
      },
      {
         title: "Child 3",
         value: 3,
         color: "#0000ff",
         key: "2",
      },
      {
         title: "Child 4",
         value: 10,
         color: "#ffff00",
         key: "3",
      },
   ];

   const tableData = [
      {
         key: "1",
         name: "John Brown",
         age: 32,
         recieval_date: '12/12/2020',
         given_amount: '10',
      },
      {
         key: "2",
         name: "Jim Green",
         age: 42,
         recieval_date: "10/10/2020",
         given_amount: '8',

      },
      {
         key: "3",
         name: "Joe Black",
         age: 32,
         recieval_date: "10/10/2020",
         given_amount: '3',

      },
      {
         key: "4",
         name: "Jim Red",
         age: 32,
         recieval_date: "10/10/2020",
         given_amount: '10',
      },
   ];
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