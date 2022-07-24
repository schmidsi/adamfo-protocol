import { useAccount } from "wagmi";
import useAdamfoPool from "../hooks/useAdamfoPool";
import Connect from "./Connect";

const AddExpense = ({ poolAddress, participants }) => {
  const { address, isConnected } = useAccount();

  const adamfoPool = useAdamfoPool(poolAddress);

  const addExpense = async () => {
    console.log(participants);

    const tx = await adamfoPool!.registerExpense(participants, 100, "Desc");

    console.log(tx);
  };

  return !isConnected ? (
    <Connect></Connect>
  ) : (
    <div>
      <button onClick={() => addExpense()}>Add expense</button>
    </div>
  );
};

export default AddExpense;
