import { AdamfoPool__factory, networks } from "adamfo-wallet-contracts";
import { useSigner } from "wagmi";

const useAdamfoPool = (address: string) => {
  const { data: signer, isError, isLoading } = useSigner();

  // console.log(signer, isError, isLoading);

  if (signer) {
    const pool = AdamfoPool__factory.connect(address, signer);

    console.log({ signer });

    return pool;
  }
};

export default useAdamfoPool;
