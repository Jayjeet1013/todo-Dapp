require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
module.exports = {
  solidity: "0.8.17",
  networks:{
    Goerli:{
      url: process.env.ALCHEMY_GOERLI_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
    }
  }
};

