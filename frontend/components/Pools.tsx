import Link from "next/link";
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
        <div key={pool.id}>
          <Link href={`/pool/${pool.id}`}>
            <a href="">{pool.id}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Pools;
