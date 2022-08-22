import React from "react";
import Card from "antd/es/card";
import icon from '../images/ethereum.png';
import { Button } from "antd";



const cardStyle = {
   width: "500px",
   height: "475px",
   justifyContent: "center",
   alignItems: "center",
   background: "rgba(0, 0, 0, 0)",
   border: "black",
   boxShadow: "rgba(0, 0, 0, 0.3) 0px 1px 4px",
   textAlign: "center",
} as React.CSSProperties;

const lineStyle = {
   display: "flex",
   flexDirection: "row",
   justifyContent: "center",
   color: '#fff',
   fontSize: '20px',
   whiteSpace: "pre-wrap",
} as React.CSSProperties;

const EthereumPrice = () => {

   let user;
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


   return (
      <Card style={cardStyle} >
         <h1 style={{ color: '#fff' }}>Welcome Username</h1>
         <br />
         <p style={lineStyle}>
            <text style={{ color: '#fff' }}>Ethereum Price</text>
         </p>
         <br />
         <p style={lineStyle}>
            <img src={icon} style={{ width: '25px', height: '40px' }}></img>
            <text style={{ color: '#fff' }}>{'\t=\t'}$1,000</text>
         </p>
         <br />
         <br />
         <p style={lineStyle}>
            <text style={{ color: '#fff' }}>Your Wallet</text>
         </p>
         <br />
         <p style={lineStyle}>
            <text style={{ color: '#fff' }}>{user.balance} ETH = $1,000</text>
         </p>
         <br />
         <Button type="primary" style={{ width: '100%' }}>
            <text style={{ color: '#fff' }}>Withdraw Ethereum</text>
         </Button>
      </Card>
   );

}

export default EthereumPrice;