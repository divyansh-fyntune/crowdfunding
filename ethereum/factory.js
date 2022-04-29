import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  // Remember to add NEXT_PUBLIC_FACTORY_CONTRACT_ADDRESS to .env file after deploying the factory contract
  "0x353Ffdad7dF2AaE74eC3e8CEEdA4d7433AE71429"
);

export default instance;
