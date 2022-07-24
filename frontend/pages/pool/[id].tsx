import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useGetPoolDetails } from "../../hooks/useGetPoolDetails";

const AddExpense = dynamic(() => import("../../components/AddExpense"), {
  ssr: false,
});

const PoolDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, poolDetails } = useGetPoolDetails(id as string);

  console.log({ poolDetails });

  return (
    <div>
      <h1>Pool: {id}</h1>
      {loading ? (
        "Loading..."
      ) : (
        <div>
          Members:{" "}
          <ul>
            {poolDetails.poolFrens.map((fren) => (
              <li key={fren.id}>
                {fren.fren.id} ({fren.deptCredit})
              </li>
            ))}
          </ul>
          <AddExpense
            poolAddress={id as string}
            participants={poolDetails.members}
          />
        </div>
      )}
    </div>
  );
};

export default PoolDetail;
