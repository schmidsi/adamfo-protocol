import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";

import styles from "../styles/Home.module.css";

const Connect = dynamic(() => import("../components/Connect"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Adamfo Wallet</title>
        <meta name="description" content="Fun with money and frens" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Adamfo Wallet</h1>

        <p className={styles.description}>Fun with money and frens</p>

        <div>
          <Connect />
        </div>
      </main>

      <footer className={styles.footer}>wagmi</footer>
    </div>
  );
};

export default Home;
