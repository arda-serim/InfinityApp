import { ethers } from "ethers";
import connectToMetamask from "."

export const addParent = async (name: any, surname: any) => {
   const { signerAddress, contract } = await connectToMetamask();

   const tx = await contract.addParent(name, surname);

   await tx.wait();

}

export const addChild = async (name: any, releaseTime: any, walletaddress: any) => {
   const { signerAddress, contract } = await connectToMetamask();

   const tx = await contract.addChild(name, releaseTime, walletaddress);

   await tx.wait();

}

export const getChilds = async () => {
   const { contract, signerAddress } = await connectToMetamask();

   const response = await contract.getChilds();

   return response;
}

export const sendMoneyToContract = async (amount: any) => {
   const { signerAddress, contract } = await connectToMetamask();

   const tx = await contract.sendMoney({ value: ethers.utils.parseEther(amount) });
   await tx.wait();
}

export const showBalanceofParent = async () => {
   const { signerAddress, contract } = await connectToMetamask();
   const balance = await contract.showMyBalance();
   return balance;
}

export const withdrawMoneyByParent = async (amount: any) => {
   const { signerAddress, contract } = await connectToMetamask();

   console.log("amount: ", amount)
   const tx = await contract.withdrawMoneyByParent(ethers.utils.parseEther(amount));

   await tx.wait();

}

export const sendMoneyToChild = async (amount: any, address: any) => {
   const { signerAddress, contract } = await connectToMetamask();

   const tx = await contract.sendMoneyToChild(address, ethers.utils.parseEther(amount))

   await tx.wait();

}

export const withdrawMoneyByParentFromChild = async (amount: any, address: any) => {
   const { signerAddress, contract } = await connectToMetamask();

   const tx = await contract.withdrawMoneyByParentFromChild(address, ethers.utils.parseEther(amount))

   await tx.wait();
}

export const withdrawMoneyByChild = async (amount: any) => {
   const { signerAddress, contract } = await connectToMetamask();

   console.log("amount: ", amount);
   const tx = await contract.withdrawMoneyByChild(ethers.utils.parseEther(amount));

   await tx.wait();
}

export const withdrawAllMoneyByChild = async () => {
   const { signerAddress, contract } = await connectToMetamask();

   const tx = await contract.withdrawAllMoneyByChild();

   await tx.wait();
}


export const getRole = async () => {
   const { signerAddress, contract } = await connectToMetamask();

   const response = await contract.getRole();

   return response;

}

export const getChild = async () => {
   const { signerAddress, contract } = await connectToMetamask();

   const child = await contract.childs(signerAddress);

   return child;
}


export const getParent = async () => {
   const { signerAddress, contract } = await connectToMetamask();

   const parent = await contract.parents(signerAddress);

   return parent;
}

export const getChildWithAddress = async (address: any) => {
   const { signerAddress, contract } = await connectToMetamask();

   const child = await contract.childs(address);

   return child;
}

export const changeReleaseTime = async (address: any, releaseTime: any) => {
   const { signerAddress, contract } = await connectToMetamask();

   const tx = await contract.changeReleaseTime(address, releaseTime);

   await tx.wait();
}

export const getAllParents = async () => {
   const { signerAddress, contract } = await connectToMetamask();

   const response = await contract.getParents();

   return response;
}