import Web3 from 'web3';

let web3;
if (typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  alert('MetaMaskをインストールして下さい');
}

const address = '0xFd1D07DBCBEb54be30F43466C162dE22c717F69f';
const abi = [
  {
    constant: false,
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string'
      }
    ],
    name: 'setName',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    constant: false,
    inputs: [],
    name: 'withdraw',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'balance',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'greet',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  }
];
export const contract = new web3.eth.Contract(abi, address);

export const getCoinbase = async () => {
  const accounts = await web3.eth.getAccounts();
  if (accounts.length === 0 || !accounts[0]) {
    throw new Error('Ethereumアカウントが空です。');
  }
  return accounts[0];
};

export const CHARGE = Web3.utils.toWei('0.01', 'ether');
