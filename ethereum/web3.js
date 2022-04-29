import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  // Remember to add INFURA_ENDPOINT to .env file
  const provider = new Web3.providers.HttpProvider(
    "https://goerli.infura.io/v3/3013abf5a2104cbf9de223700d601798"
  );
  web3 = new Web3(provider);
}

export default web3;