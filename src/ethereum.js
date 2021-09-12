import { Contract, ethers } from "ethers";
import Cards from "./contracts/Cards.json";

const getBlockchain = () =>
  new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      if (window.ethereum) {
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const nft = new Contract(
          Cards.networks[window.ethereum.networkVersion].address,
          Cards.abi,
          signer
        );
        resolve({ nft });
      }
      resolve({ nft: undefined });
    });
  });

export default getBlockchain;
