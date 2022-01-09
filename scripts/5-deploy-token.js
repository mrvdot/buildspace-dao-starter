import sdk from "./1-initialize-sdk.js";

const APP_ADDRESS = '0x9947eD9E41D7fC4f28366c95A518BC8fc8B03231';

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule(APP_ADDRESS);

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: "WeirdD(A)O Governance Token",
      // What's your token's symbol? Ex. "ETH"
      symbol: "WEIRD",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();