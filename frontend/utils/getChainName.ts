const CHAIN_ID_TO_NAME = {
  1: "mainnet",
  4: "rinkeby",
  5: "goerli",
  80001: "mumbai",
  42220: "celo",
  31337: "localhost",
  100: "xdai",
  137: "matic",
};

export const getChainName = (chainId: number) => {
  const chainName = chainId ? CHAIN_ID_TO_NAME[chainId] : "unknown";
  return chainName;
};
