import { ethers } from 'ethers';
// @ts-ignore
import { CONTRACT_ADDRESS, PATENT_ABI } from '../constants/Constant';

async function connectToMetamask() {

   // @ts-ignore
   const provider = new ethers.providers.Web3Provider(window.ethereum);
   let accounts = await provider.send("eth_requestAccounts", []);
   let account = accounts[0];

   const signer = provider.getSigner(); // üst stırda geşen provider'dan hesabı çekiuyor
   const signerAddress = await signer.getAddress();

   provider.on('accountsChanged', (accounts: any) => { account = accounts[0]; console.log("sdasd: ", signerAddress); });

   console.log("signer: ", signerAddress);

   const contract = new ethers.Contract(CONTRACT_ADDRESS, PATENT_ABI, signer);

   return {
      signerAddress,
      contract,
   }
}
export default connectToMetamask;