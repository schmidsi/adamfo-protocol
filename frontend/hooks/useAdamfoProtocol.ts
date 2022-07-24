import { AdamfoProtocol__factory } from "adamfo-wallet-contracts";
import { useSigner, useNetwork } from "wagmi";

import * as networks from "../networks.json";
import { getChainName } from "../utils/getChainName";

const useAdamfoProtocol = () => {
  const { data: signer, isError, isLoading } = useSigner();
  const { chain, chains } = useNetwork();

  console.log({ chain, chains });

  const chainName = getChainName(chain?.id || 0);

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
