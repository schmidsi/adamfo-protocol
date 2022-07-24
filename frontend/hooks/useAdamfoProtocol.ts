import { AdamfoProtocol__factory } from "adamfo-wallet-contracts";
import { useSigner } from "wagmi";

import * as networks from "../networks.json";

const useAdamfoProtocol = () => {
  const { data: signer, isError, isLoading } = useSigner();

  // console.log(signer, isError, isLoading);

  if (signer) {
    const protocol = AdamfoProtocol__factory.connect(
      networks.mumbai.AdamfoProtocol.address,
      signer
    );

    console.log({ signer });

    return protocol;
  }
};

export default useAdamfoProtocol;
