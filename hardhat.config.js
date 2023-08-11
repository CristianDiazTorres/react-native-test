require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 const API_URL = "https://ropsten.infura.io/v3/333820a3e40144feac79ed1ac358ebb4";
 const PRIVATE_KEY = "0x900F59165343986687B03faF9634AC01515383Cf";
 


module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    ropsten: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};




