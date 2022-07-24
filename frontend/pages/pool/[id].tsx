import { useRouter } from "next/router";

const PoolDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>Pool: {id}</p>;
};

export default PoolDetail;
