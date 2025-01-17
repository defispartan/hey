require('dotenv').config();

import type { HardhatUserConfig } from 'hardhat/config';

import '@nomicfoundation/hardhat-toolbox';
import '@openzeppelin/hardhat-upgrades';

const config: HardhatUserConfig = {
  defaultNetwork: 'polygonMumbai',
  etherscan: {
    apiKey: { polygonMumbai: process.env.POLYGON_ETHERSCAN_API_KEY! }
  },
  networks: {
    polygonMumbai: {
      accounts: [process.env.PRIVATE_KEY!],
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
    }
  },
  solidity: '0.8.23',
  sourcify: { enabled: true }
};

export default config;
