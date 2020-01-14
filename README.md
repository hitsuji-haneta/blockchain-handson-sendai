# ブロックチェーンハンズオン仙台

## 事前準備
1. Metamaskプラグインを導入します。  
  https://metamask.io/
2. テストネット（Ropsten）を選択します。  
![テストネット選択](./image/1-1.png)  
3. アカウントを作成します。  
![アカウント作成](./image/1-2.png)  
4. ETH(通貨)を取得します。  
「振込」→「Etherを取得する」→「request 1 ether from faucet」

## コントラクトの作成
1. Ethereum用クラウドIDE「Remix」を開きます。  
  https://remix.ethereum.org
2. コントラクト`Hello.sol`を作成します。  
```
pragma solidity ^0.5.0;

contract Hello {
  string name;

  constructor (string memory _name) public {
    name = _name;
  }

  function setName(string memory _name) public {
    name = _name;
  }

  function greet() public view returns (string memory) {
    return string(abi.encodePacked(bytes("Hello, "), bytes(name)));
  }
}
```
3. 作成したコントラクトをコンパイルします。  
  サイドバーから「Solidity compiler」のマークを選択し、「Conpile Hello.sol」を押下してください。  
![コンパイル](./image/2-1.png)  

4. コントラクトをテストネットにデプロイします。  
  サイドバーから「Deploy & run transactions」のマークを選択。  
  → Environmentで「Injected Web3」を選択。（Metamaskで選択中のネットが使用されます）  
  → コンストラクタの入力となる文字列を入れて、「Deploy」を押下してください。  
![デプロイ](./image/2-2.png)  

## フロントエンドの作成
### vueプロジェクトの作成
1. 任意のディレクトリでvue.jsのプロジェクトを作成します。  
```
$ npx @vue/cli create frontend
```
→ 設定はdefaultでOKですが、eslintに慣れてない人はマニュアルセレクトで外したほうがいいかも。  
→ default（eslintあり）にした人は、`frontend/package.json`に以下を追加してください。  
```frontend/package.json
  "eslintConfig": {
    ...
    "rules": {
+     "no-console": 0
    },
    ...
  },
```

2. まずは試しに起動してみましょう。  
```
$ cd frontend
$ npm run serve
```
→ https://localhost/8080 で確認できたらOK。  

### メッセージの取得
1. コントラクト使用モジュールを作成します。  
→ `frontend/src/lib/contract.js`として以下を作成してください。
```frontend/src/lib/contract.js
import Web3 from 'web3';

let web3;
if (typeof window.web3 !== 'undefined') {
  web3 = new Web3(window.web3.currentProvider);
} else {
  alert('MetaMaskをインストールして下さい');
}

const address = '<Remixからコピペ①>';
const abi = <Remixからコピペ②>;
export const contract = new web3.eth.Contract(abi, address);
```
`address`と`abi`はRemixから取得します。  
- address  
![address取得](./image/3-1.png)  
- abi  
![abi取得](./image/3-2.png)  

2. 作成したモジュールを使用してコントラクトからHello.greetメソッドを呼び出します。  
`frontend/src/App.vue`を以下のように書き換えてください。  
```frontend/src/App.vue
<template>
  <div id="app">
    <h1>{{message}}</h1>
  </div>
</template>

<script>
import { contract } from "./lib/contract";

export default {
  name: "app",
  data() {
    return {
      message: ""
    };
  },
  mounted: async function() {
    this.greet();
  },
  methods: {
    greet: async function() {
      this.message = await contract.methods.greet().call();
    }
  }
};
</script>

// <style>以下はそのままでいいです。
```

3. 起動してこんな感じになったら成功！  
![greet取得](./image/4-1.png)  
