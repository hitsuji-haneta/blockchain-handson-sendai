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
  → Environmentで「Injected Web3」を選択。（Metamaskで選択中のネットが使用される）  
  → コンストラクタの入力となる文字列を入れて、「Deploy」を押下してください。  
![デプロイ](./image/2-2.png)  