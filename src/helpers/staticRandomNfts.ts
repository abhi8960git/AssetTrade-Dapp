export type NFT_metadata = {
  name: string;
  description: string;
  image: string;
};

const generateRandomNFT = (): NFT_metadata => {
  const names = [
    "NFT 1",
    "NFT 2",
    "NFT 3",
    "NFT 4",
    "NFT 5",
    "NFT 6",
    "NFT 7",
    "NFT 8",
    "NFT 9",
    "NFT 10",
  ];
  const descriptions = [
    "Land part 1",
    "Land part 2",
    "Land part 3",
    "Land part 4",
  ];

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomDescription =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  return {
    name: randomName,
    description: randomDescription,
    image:
      "https://beige-royal-slug-524.mypinata.cloud/ipfs/QmeAne57ugsrrnWNWF1CAnba7xYdLNU2P5hDxd1mz1s42p",
  };
};

const generateRandomNFTs = (count: number): NFT_metadata[] => {
  const nfts: NFT_metadata[] = [];
  for (let i = 0; i < count; i++) {
    nfts.push(generateRandomNFT());
  }
  return nfts;
};

// Generate 10 random NFTs
export const randomNFTs = generateRandomNFTs(4);
console.log(randomNFTs);
