import { AdamfoProtocol__factory, networks } from "adamfo-wallet-contracts";
import { useSigner } from "wagmi";

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
