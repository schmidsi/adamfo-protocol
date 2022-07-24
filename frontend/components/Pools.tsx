import { useAccount } from "wagmi";
import useAdamfoProtocol from "../hooks/useAdamfoProtocol";
import { useGetPools } from "../hooks/useGetPools";
import Connect from "./Connect";

const Pools = () => {
  const { address } = useAccount();

  const { pools, loading } = useGetPools(address);

  return loading ? (
    <div>Loading ...</div>
  ) : (
    <div>
      {pools.map((pool) => (
        <div key={pool.id}>{pool.id}</div>
      ))}
    </div>
  );
};

export default Pools;
