/* eslint-disable no-unused-vars */
// https://dev.to/dabit3/the-complete-guide-to-full-stack-ethereum-development-3j13
// https://github.com/ethjs/examples
// https://docs.openzeppelin.com/learn/developing-smart-contracts

// 1. Make escrow with custom price and item information
// 2. Separate UI for seller and visitor (No buyer at the moment), seller can 
// 3. When user buy the product, separate UI for seller and buyer, increase total buyers
// 4. When user receive the product, separate UI for seller and buyer and option for seller to refund money
// 5. Buyer can restart the contract with new information?
// all again until buyer end the contract

// Organize the app. Use context and separate components?

// import './App.css';
import { useEffect, useState, createRef } from 'react';
import { Contract, ethers } from 'ethers'

import moment from "moment";

// import CircularProgress from '@material-ui/core/CircularProgress';

// import Button from '@material-ui/core/Button';

import { Container, Dimmer, Loader, Grid, Sticky, Message } from 'semantic-ui-react';
//import 'semantic-ui-css/semantic.min.css';
  
import Escrow from './artifacts/contracts/Escrow.sol/Escrow.json'

import {
  humanReadableEscrowState,
  humanReadableUnixTimestamp,
} from "./formatters";

import ContractDetails from "./components/ContractDetails";
import Balance from "./components/Balance";

import Seller from "./components/users/Seller";
import Visitor from "./components/users/Visitor";
import Buyer from "./components/users/Buyer";
import PreviousBuyers from "./components/PreviousBuyers";

// localhost
const escrowAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

// Move this to context?

// const provider = new ethers.providers.Web3Provider(window.ethereum);
// const contract = new ethers.Contract(escrowAddress, Escrow.abi, provider);

// Show metamask for users to decide if they will pay or not
async function requestAccount() {
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  } catch (error) {
    console.log("error");
    console.error(error);

    alert("Login to Metamask first");
  }
}

// 1. Use context and separate logic(components and functions),

// Improve CSS with semantic-ui-react?
// https://github.com/substrate-developer-hub/substrate-front-end-template
function App() {

/*
web.utils.toHex(value)
*/
//var hash = web3.sha3("get()");
  


const handleClick = async () => {

//  alert(ethers.utils.hexlify(ethers.utils.parseEther('1.02'))); //  0.1 ether  -  0x016345785d8a0000
                                                                //  0.11ether  -   0x0186cc6acd4b0000
                                                                // 0.011ether   -  0x27147114878000
                                                                // 1.02 ether -  0x0e27c49886e60000

  var provider = ethers.providers.getDefaultProvider();

  for (let i=0; i<30; i++) {
    var storagePromise = provider.getStorageAt("0xFc62a32DA21052fB3086e8f68aD10a7118a98606", i);
    storagePromise.then(function(result){
        console.log(result);
    });
  }
                                                                   

/*  window.ethereum
  .request({
    method: 'eth_sendTransaction',
    params: [
      {
        from: '0x900F59165343986687B03faF9634AC01515383Cf',  // My contract address (Jay) OK
        to: '0xAd0AC1D078190B2bE0DCE7521c7B8A83c0940544',  // mainnet contract address OK
        value: '0x0186cc6acd4b0000',    //  must be 1.05 ether OK
//         gasPrice: '50000000000',
         gas: '21000',
        data: '0x3853682c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000086120626172626552000000000000000000000000000000000000000000000000'  // OK            
     },                                                                                                                                                 
    ],
  })
  .then((txHash) => console.log(txHash))
  .catch((error) => console.error);
*/



}



  return (
    
    <div>
      <button onClick={handleClick}>test</button>
    </div>
  );
}

export default App;







/**
 *Submitted for verification at Etherscan.io on 2022-01-18
*/
/* Remix Code
contract rabbit_Quiz
{
    event PrintData(bytes32 indexed originString, bytes32 indexed responseString);
    event Transfered(address indexed adr, uint bal);


    function Try(string memory _response) public payable
    {
        require(msg.sender == tx.origin);

        emit PrintData(responseHash, keccak256(abi.encode(_response)));

        if(responseHash == keccak256(abi.encode(_response)) && msg.value > 0.1 ether)
        {
            emit Transfered(msg.sender, address(this).balance);
            payable(msg.sender).transfer(address(this).balance);
        }
    }

    string public question;

    bytes32 responseHash;

    mapping (bytes32=>bool) admin;

    function Start(string calldata _question, string calldata _response) public payable isAdmin{
        if(responseHash==0x0){
            responseHash = keccak256(abi.encode(_response));
            question = _question;

//            emit PrintData(_question, responseHash);
        }
    }

    function Stop() public payable isAdmin {
        payable(msg.sender).transfer(address(this).balance);
    }

    function New(string calldata _question, bytes32 _responseHash) public payable isAdmin {
        question = _question;
        responseHash = _responseHash;
    }

    constructor() {
    }

    modifier isAdmin(){
        require(admin[keccak256(abi.encodePacked(msg.sender))]);
        _;
    }

    fallback() external {}
}
*/



