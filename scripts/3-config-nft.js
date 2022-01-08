import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x4dB10d142b13685690B8bA94328572Fa348a3185",
);

(async () => {
  try {
    const res = await bundleDrop.createBatch([
      {
        name: "Bridge To Better World",
        description: "This NFT will give you access to WeirdD(A)O!",
        image: readFileSync("scripts/assets/wordmark.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!", res);
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()