
export const CONTRACT_ADDRESS = "0x1B6E255C912eE19665193c9ea951d4c7Df18cD53";

export const PATENT_ABI = [
   {
     inputs: [],
     stateMutability: "nonpayable",
     type: "constructor",
   },
   {
     anonymous: false,
     inputs: [
       {
         indexed: false,
         internalType: "address",
         name: "from",
         type: "address",
       },
       {
         indexed: false,
         internalType: "address",
         name: "to",
         type: "address",
       },
       {
         indexed: false,
         internalType: "uint256",
         name: "amount",
         type: "uint256",
       },
     ],
     name: "TransferToContract",
     type: "event",
   },
   {
     inputs: [
       {
         internalType: "string",
         name: "_childname",
         type: "string",
       },
       {
         internalType: "uint256",
         name: "_releaseTime",
         type: "uint256",
       },
       {
         internalType: "address payable",
         name: "_childAddress",
         type: "address",
       },
     ],
     name: "addChild",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       {
         internalType: "string",
         name: "_name",
         type: "string",
       },
       {
         internalType: "string",
         name: "_surname",
         type: "string",
       },
     ],
     name: "addParent",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       {
         internalType: "address",
         name: "",
         type: "address",
       },
     ],
     name: "admins",
     outputs: [
       {
         internalType: "address",
         name: "walletaddress",
         type: "address",
       },
       {
         internalType: "uint256",
         name: "parentIndex",
         type: "uint256",
       },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       {
         internalType: "address",
         name: "_childAddress",
         type: "address",
       },
       {
         internalType: "uint256",
         name: "_newReleaseTime",
         type: "uint256",
       },
     ],
     name: "changeReleaseTime",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       {
         internalType: "address",
         name: "",
         type: "address",
       },
     ],
     name: "childs",
     outputs: [
       {
         internalType: "address payable",
         name: "walletaddress",
         type: "address",
       },
       {
         internalType: "address",
         name: "parentAddress",
         type: "address",
       },
       {
         internalType: "string",
         name: "name",
         type: "string",
       },
       {
         internalType: "uint256",
         name: "releaseTime",
         type: "uint256",
       },
       {
         internalType: "uint256",
         name: "amountOfMoney",
         type: "uint256",
       },
       {
         internalType: "uint256",
         name: "totalWithdrawnMoney",
         type: "uint256",
       },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "getChilds",
     outputs: [
       {
         components: [
           {
             internalType: "address payable",
             name: "walletaddress",
             type: "address",
           },
           {
             internalType: "address",
             name: "parentAddress",
             type: "address",
           },
           {
             internalType: "string",
             name: "name",
             type: "string",
           },
           {
             internalType: "uint256",
             name: "releaseTime",
             type: "uint256",
           },
           {
             internalType: "uint256",
             name: "amountOfMoney",
             type: "uint256",
           },
           {
             internalType: "uint256",
             name: "totalWithdrawnMoney",
             type: "uint256",
           },
         ],
         internalType: "struct InfinityContract.Child[]",
         name: "",
         type: "tuple[]",
       },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "getParents",
     outputs: [
       {
         components: [
           {
             internalType: "address payable",
             name: "walletaddress",
             type: "address",
           },
           {
             internalType: "string",
             name: "name",
             type: "string",
           },
           {
             internalType: "string",
             name: "surname",
             type: "string",
           },
           {
             internalType: "uint256",
             name: "currentBalance",
             type: "uint256",
           },
           {
             internalType: "uint256",
             name: "childIndex",
             type: "uint256",
           },
           {
             internalType: "address[]",
             name: "childs",
             type: "address[]",
           },
         ],
         internalType: "struct InfinityContract.Parent[]",
         name: "",
         type: "tuple[]",
       },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "getRole",
     outputs: [
       {
         internalType: "string",
         name: "",
         type: "string",
       },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "owner",
     outputs: [
       {
         internalType: "address",
         name: "",
         type: "address",
       },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [
       {
         internalType: "address",
         name: "",
         type: "address",
       },
     ],
     name: "parents",
     outputs: [
       {
         internalType: "address payable",
         name: "walletaddress",
         type: "address",
       },
       {
         internalType: "string",
         name: "name",
         type: "string",
       },
       {
         internalType: "string",
         name: "surname",
         type: "string",
       },
       {
         internalType: "uint256",
         name: "currentBalance",
         type: "uint256",
       },
       {
         internalType: "uint256",
         name: "childIndex",
         type: "uint256",
       },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "sendMoney",
     outputs: [],
     stateMutability: "payable",
     type: "function",
   },
   {
     inputs: [
       {
         internalType: "address",
         name: "_childAddress",
         type: "address",
       },
       {
         internalType: "uint256",
         name: "_amount",
         type: "uint256",
       },
     ],
     name: "sendMoneyToChild",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [],
     name: "showBalanceOfContract",
     outputs: [
       {
         internalType: "uint256",
         name: "",
         type: "uint256",
       },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "showMyBalance",
     outputs: [
       {
         internalType: "uint256",
         name: "",
         type: "uint256",
       },
     ],
     stateMutability: "view",
     type: "function",
   },
   {
     inputs: [],
     name: "withdrawAllMoneyByChild",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [],
     name: "withdrawAllMoneyByParent",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       {
         internalType: "address",
         name: "_childAddress",
         type: "address",
       },
     ],
     name: "withdrawAllMoneyByParentFromChild",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       {
         internalType: "uint256",
         name: "_amount",
         type: "uint256",
       },
     ],
     name: "withdrawMoneyByChild",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       {
         internalType: "uint256",
         name: "_amount",
         type: "uint256",
       },
     ],
     name: "withdrawMoneyByParent",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
   {
     inputs: [
       {
         internalType: "address",
         name: "_childAddress",
         type: "address",
       },
       {
         internalType: "uint256",
         name: "_amount",
         type: "uint256",
       },
     ],
     name: "withdrawMoneyByParentFromChild",
     outputs: [],
     stateMutability: "nonpayable",
     type: "function",
   },
 ];