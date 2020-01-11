import Web3 from 'web3';

let web3;
if (typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  alert('MetaMaskをインストールして下さい');
}

const address = '0x507849CDb8115dA3Ff5967A59d6739C6377AbcA8';
const abi = [
  {
    constant: false,
    inputs: [
      {
        name: '_name',
        type: 'string'
      }
    ],
    name: 'setName',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    constant: true,
    inputs: [],
    name: 'greet',
    outputs: [
      {
        name: '',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        name: '_name',
        type: 'string'
      }
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor'
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
