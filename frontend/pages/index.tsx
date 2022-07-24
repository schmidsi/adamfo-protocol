import type { NextPage } from "next";
import dynamic from "next/dynamic";

import Pools from "../components/Pools";

import styles from "../styles/Home.module.css";

const CreatePool = dynamic(() => import("../components/CreatePool"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>adamfoɔ protocol</h1>

        <p className={styles.description}>Fun with money and frens</p>

        <div>
          <CreatePool />
          <Pools />
        </div>
      </main>

      <footer className={styles.footer}>wagmi</footer>
    </div>
  );
};

export default Home;
