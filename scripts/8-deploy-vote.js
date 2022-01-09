import sdk from "./1-initialize-sdk.js";

const APP_ADDRESS = '0x9947eD9E41D7fC4f28366c95A518BC8fc8B03231';

// In order to deploy the new contract we need our old friend the app module again.
const appModule = sdk.getAppModule(APP_ADDRESS);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      // Give your governance contract a name.
      name: "WeirdD(A)O's Unusual Proposals",

      // This is the location of our governance token, our ERC-20 contract!
      votingTokenAddress: "0x898a52134a4A8674E547633E6FA9FA3Fd6c3BbB9",

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      proposalStartWaitTimeInSeconds: 0,

      // How long do members have to vote on a proposal when it's created?
      // Here, we set it to 24 hours (86400 seconds)
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      // Will explain more below.
      votingQuorumFraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      minimumNumberOfTokensNeededToPropose: "0",
    });

    console.log(
      "✅ Successfully deployed vote module, address:",
      voteModule.address,
    );
  } catch (err) {
    console.error("Failed to deploy vote module", err);
  }
})();

// Result: 0xddd4BAb2a11901DC3404A6BDCC3CBaB9eb85427b