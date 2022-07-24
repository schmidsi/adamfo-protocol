import { useAccount, useNetwork } from "wagmi";
import useAdamfoProtocol from "../hooks/useAdamfoProtocol";
import { getChainName } from "../utils/getChainName";
import Connect from "./Connect";

const CreatePool = () => {
  const { address, isConnected } = useAccount();
  const { chain, chains } = useNetwork();

  const adamfoProtocol = useAdamfoProtocol();

  const chainName = getChainName(chain?.id || 0);

  const createPool = async () => {
    const tx = await adamfoProtocol!.createPool([
      address!,
      "0xe43c58Be52eaf8761c6D5F776B3546b32a2e9679",
    ]);

    console.log(tx);
  };

  return !isConnected ? (
    <Connect></Connect>
  ) : (
    <div>
      <div>
        {chainName} ({chain?.id})
      </div>
      <button onClick={() => createPool()}>Create Pool</button>
    </div>
  );
};

export default CreatePool;
