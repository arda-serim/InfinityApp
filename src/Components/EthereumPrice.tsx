import React, { useState } from "react";
import Card from "antd/es/card";
import icon from '../images/ethereum.png';
import { Button } from "antd";
import { sendMoneyToContract, showBalanceofParent, withdrawMoneyByParent } from "../contract/functions";



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

const buttons = {
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-evenly',
   alignItems: 'center',
   marginTop: '-7%',
} as React.CSSProperties;



const EthereumPrice = (props: any) => {
   const [amountOfEthToDeposit, setAmountOfEthToDeposit] = useState('');
   const [amountOfEthToWithdraw, setAmountOfEthToWithdraw] = useState();
   const [balance, setBalance] = useState(0);


   React.useEffect(() => {
      async function getBalance() {
         const balance = await showBalanceofParent();
         setBalance(parseInt(balance));
      }

      getBalance();
   }, []);




   const sendMoneyHandler = async () => {
      await sendMoneyToContract(amountOfEthToDeposit);
   }


   const withdrawHandler = async () => {
      await withdrawMoneyByParent(amountOfEthToWithdraw);
   }

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
            <text style={{ color: '#fff' }}>{balance} ETH = $1,000</text>
         </p>
         <br />
         <div style={buttons}>
            <div>
               <input onChange={(e: any) => setAmountOfEthToDeposit(e.target.value)}></input>
               <Button type="primary" style={{ width: '165px' }} onClick={sendMoneyHandler}>
                  <text style={{ color: '#fff' }}>Deposit Ethereum</text>
               </Button>
            </div>
            <div>
               <input onChange={(e: any) => setAmountOfEthToWithdraw(e.target.value)}></input>
               <Button type="primary" style={{ width: '165px' }} onClick={withdrawHandler}>
                  <text style={{ color: '#fff' }} >Withdraw Ethereum</text>
               </Button>
            </div>
         </div>
      </Card>
   );

}

export default EthereumPrice;