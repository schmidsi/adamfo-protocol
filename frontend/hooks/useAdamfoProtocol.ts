import { AdamfoProtocol__factory } from "adamfo-wallet-contracts";
import { useSigner, useNetwork } from "wagmi";

import * as networks from "../networks.json";

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

const useAdamfoProtocol = () => {
  const { data: signer, isError, isLoading } = useSigner();
  const { chain, chains } = useNetwork();

  console.log({ chain, chains });

  const chainName = chain?.id ? CHAIN_ID_TO_NAME[chain.id] : "unknown";

  // console.log(signer, isError, isLoading);

  if (signer) {
    const protocol = AdamfoProtocol__factory.connect(
      networks[chainName].AdamfoProtocol.address,
      signer
    );

    console.log({ signer });

    return protocol;
  }
};

export default useAdamfoProtocol;
