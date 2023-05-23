export const config = {
  // Contract Address ======================================== //
  contract_address: '0x30cdac3871c41a63767247c8d1a2de59f5714e78',
  //
  // uncomment the 2 lines above to use local images instead of retrieving images from ipfs for each tweet
  use_local_images: true,
  local_image_path: 'https://obitsnft.com/obits/solid/',
  //
  // this is a configuration for the phunk bid demo extension
  local_bids_image_path: './bids_images/Phunk_',
  //
  // Fiat Conversion Currency ================================ //
  // Available Options: ====================================== //
  // usd, aud, gbp, eur, cad, jpy, cny ======================= //
  currency: 'usd',
  // Message ================================================= //
  // Available Parameters: =================================== //
  // <tokenId> ==================== Token ID of transfered NFT //
  // <ethPrice> ================= Value of transactions in eth //
  // <fiatPrice> =============== Value of transactions in fiat //
  // <txHash> =========================== The transaction hash //
  // <from> ===================================== From address //
  // <to> ========================================= To address //
  saleMessage:
    '💀 Obit #<tokenId> was sold for <ethPrice> (<fiatPrice>)\n\nfrom: <from>\nto: <to>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://opensea.io/assets/ethereum/0x30cdac3871c41a63767247c8d1a2de59f5714e78/<tokenId>\nhttps://looksrare.org/collections/0x30cdac3871c41a63767247c8d1a2de59f5714e78/<tokenId>\n',
  bidMessage:
    '💀 Obit #<tokenId> received a bid for <ethPrice> (<fiatPrice>)\n\nfrom: <from>\n\nhttps://etherscan.io/tx/<txHash>\nhttps://opensea.io/assets/ethereum/0x30cdac3871c41a63767247c8d1a2de59f5714e78/<tokenId>\nhttps://looksrare.org/collections/0x30cdac3871c41a63767247c8d1a2de59f5714e78/<tokenId>\n',
  // Prefer ENS over 0x address (Uses more Alchemy requests) = //
  // Available Options: ====================================== //
  // true, false ============================================= //
  ens: true,
  // Include free mints in tweets ============================ //
  // Available Options: ====================================== //
  // true, false ============================================= //
  includeFreeMint: false,
};
