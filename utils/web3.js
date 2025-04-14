import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and MetaMask is running
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server OR the user is not running MetaMask
  const provider = new Web3.providers.HttpProvider(
    "http://127.0.0.1:8545" // Ganache GUI
    // or "http://127.0.0.1:8545" for ganache-cli
  );
  web3 = new Web3(provider);
}

export default web3;