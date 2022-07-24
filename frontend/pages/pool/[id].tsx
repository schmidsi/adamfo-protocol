import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useGetPoolDetails } from "../../hooks/useGetPoolDetails";

const AddExpense = dynamic(() => import("../../components/AddExpense"), {
  ssr: false,
});

import styles from "../../styles/Home.module.css";

const PoolDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { loading, poolDetails } = useGetPoolDetails(id as string);

  console.log({ poolDetails });

  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
      </main>

      <footer className={styles.footer}>wagmi</footer>
    </div>
  );
};

export default PoolDetail;
