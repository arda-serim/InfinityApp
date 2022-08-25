import React, { useState } from "react";
import Card from "antd/es/card";
import icon from '../images/ethereum.png';
import { Button, Modal, Spin } from "antd";
import { sendMoneyToContract, showBalanceofParent, withdrawMoneyByParent } from "../contract/functions";
import { ML } from "../App";
import { useHref } from "react-router-dom";
import ModalComponent from "./ModalComponent";



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

   const [error, setError] = useState();

   const [loading, setLoading] = useState(false);

   React.useEffect(() => {
      async function getBalance() {
         const balance = await showBalanceofParent();
         setBalance(Number(balance));
      }

      getBalance();
   }, []);




   const sendMoneyHandler = async () => {
      setLoading(true);
      await sendMoneyToContract(amountOfEthToDeposit);
      setLoading(false);
      window.location.reload();
   }


   const withdrawHandler = async () => {
      try {
         await withdrawMoneyByParent(amountOfEthToWithdraw);
         window.location.reload();
      }
      catch (error: any) {
         setError((error.reason.split(":"))[1])
      }

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

   const clearError = () => {
      //@ts-ignore
      setError('');
   }

   return (
      <>
         {
            loading && <ModalComponent title="Loadıng" modalVisibility={true} message={ <Spin /> }  />
         }
         {
            error && <ModalComponent title="ERROR OCCURED" modalVisibility={true} message={error} style={{ color: 'red' }} onClear={clearError} />
         }
         <Card style={cardStyle} >
            <h1 style={{ color: '#fff' }}>{ML('user')} Username</h1>
            <br />
            <p style={lineStyle}>
               <text style={{ color: '#fff' }}>Ethereum{ML('ethprice')}</text>
            </p>
            <br />
            <p style={lineStyle}>
               <img src={icon} style={{ width: '25px', height: '40px' }}></img>
               <text style={{ color: '#fff' }}>{'\t=\t'}$1,000</text>
            </p>
            <br />
            <br />
            <p style={lineStyle}>
               <text style={{ color: '#fff' }}>{ML('yourWallet')}</text>
            </p>
            <br />
            <p style={lineStyle}>
               <text style={{ color: '#fff' }}>{balance / (Math.pow(10, 18))} ETH = $1,000</text>
            </p>
            <br />
            <div style={buttons}>
               <div>
                  <input onChange={(e: any) => setAmountOfEthToDeposit(e.target.value)}></input>
                  <Button type="primary" style={{ width: '165px' }} onClick={sendMoneyHandler}>
                     <text style={{ color: '#fff' }}>{ML('sendeth')} </text>
                  </Button>
               </div>
               <div>
                  <input onChange={(e: any) => setAmountOfEthToWithdraw(e.target.value)}></input>
                  <Button type="primary" style={{ width: '165px' }} onClick={withdrawHandler}>
                     <text style={{ color: '#fff' }} >{ML('withdraweth')}</text>
                  </Button>
               </div>
            </div>
         </Card>
      </>

   );

}

export default EthereumPrice;