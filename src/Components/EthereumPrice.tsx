import React, { useState } from "react";
import Card from "antd/es/card";
import icon from '../images/ethereum.png';
import { Button, Modal, Spin } from "antd";
import { sendMoneyToContract, showBalanceofParent, withdrawMoneyByParent } from "../contract/functions";
import connectToMetamask from '../contract';
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


const signInButtonStyle = {
   height: '32px',
   background: 'linear-gradient(180deg, #FF980E 41.67%, #FDB137 100%)',
   color: '#fff',
   border: 'none',
   width: '165px',
   marginTop: '1%'

};

const inputStyle = {
   borderRadius: '30px',
   border: 'none',
   height: '28px',
   textAlign: 'center'
} as React.CSSProperties;


const EthereumPrice = (props: any) => {
   const [amountOfEthToDeposit, setAmountOfEthToDeposit] = useState('');
   const [amountOfEthToWithdraw, setAmountOfEthToWithdraw] = useState();
   const [balance, setBalance] = useState(0);
   const [name, setName] = useState('');
   const [ethValue, setEthValue] = useState('');

   const [error, setError] = useState();

   const [isLoading, setIsLoading] = useState(false);

   const ethPrice = require('eth-price');


   React.useEffect(() => {
      async function getBalance() {
         const balance = await showBalanceofParent();
         setBalance(Number(balance));
      }

      async function getEthValue() {
         const ethValue = await ethPrice('usd');
         const eth = parseFloat(ethValue[0].substring(5))
         setEthValue(eth.toString());
      }




      async function getName() {
         const { contract, signerAddress } = await connectToMetamask();

         const tempParent = await contract.parents(signerAddress);

         const name = String(tempParent.name);
         const surname = String(tempParent.surname);
         setName(name + ' ' + surname);
      }


      getEthValue();
      getName();

      getBalance();
   }, [ethPrice('usd')]);




   const sendMoneyHandler = async () => {
      try {
         setIsLoading(true);
         await sendMoneyToContract(amountOfEthToDeposit);
         setIsLoading(false);
         window.location.reload();

      }
      catch (error: any) {
         const activeLanguage = localStorage.getItem("i18nextLng");
         const errorMessage = (error.reason.split(":"))[1]
         const messageEN = errorMessage.split("TR")[0]
         const messageTR = errorMessage.split("TR")[1]

         if (activeLanguage === 'en') {
            setError(messageEN)
         } else {
            setError(messageTR)
         }
         setIsLoading(false);
      }
   }


   const withdrawHandler = async () => {
      try {
         setIsLoading(true)
         await withdrawMoneyByParent(amountOfEthToWithdraw);
         setIsLoading(false)
         window.location.reload();
      }
      catch (error: any) {
         const activeLanguage = localStorage.getItem("i18nextLng");
         const errorMessage = (error.reason.split(":"))[1]
         const messageEN = errorMessage.split("TR")[0]
         const messageTR = errorMessage.split("TR")[1]

         if (activeLanguage === 'en') {
            setError(messageEN)
         } else {
            setError(messageTR)
         }
         setIsLoading(false);
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
            isLoading && <ModalComponent title="LOADING..." modalVisibility={true} message={<Spin />} style={{ textAlign: 'center' }} loading={true} />
         }
         {
            error && <ModalComponent title="ERROR OCCURED" modalVisibility={true} message={error} style={{ color: 'red' }} onClear={clearError} />
         }
         <Card style={cardStyle} >
            <h1 style={{ color: '#fff' }}>{ML('user')} {' '} {name}</h1>
            <br />
            <p style={lineStyle}>
               <text style={{ color: '#fff' }}>Ethereum{ML('ethprice')}</text>
            </p>
            <br />
            <p style={lineStyle}>
               <img src={icon} style={{ width: '25px', height: '40px' }}></img>
               <text style={{ color: '#fff' }}>{'\t=\t'}${ethValue}</text>
            </p>
            <br />
            <br />
            <p style={lineStyle}>
               <text style={{ color: '#fff' }}>{ML('yourWallet')}</text>
            </p>
            <br />
            <p style={lineStyle}>
               <text style={{ color: '#fff' }}>{balance / (Math.pow(10, 18))} ETH = ${parseFloat(ethValue) * balance / (Math.pow(10, 18))}</text>
            </p>
            <br />
            <div style={buttons}>
               <div>
                  <input onChange={(e: any) => setAmountOfEthToDeposit(e.target.value)} style={inputStyle}></input>
                  <Button type="primary" style={signInButtonStyle} shape='round' onClick={sendMoneyHandler}>
                     <text style={{ color: '#fff' }}>{ML('sendeth')} </text>
                  </Button>
               </div>
               <div>
                  <input onChange={(e: any) => setAmountOfEthToWithdraw(e.target.value)} style={inputStyle}></input>
                  <Button type="primary" style={signInButtonStyle} shape='round' onClick={withdrawHandler}>
                     <text style={{ color: '#fff' }} >{ML('withdraweth')}</text>
                  </Button>
               </div>
            </div>
         </Card>
      </>

   );

}

export default EthereumPrice;

