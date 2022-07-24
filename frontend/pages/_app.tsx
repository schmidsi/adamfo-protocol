import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";

import { useApollo } from "../hooks/useApollo";

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>adamfoɔ protocol</title>
        <meta name="description" content="Fun with money and frens" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ApolloProvider>
  );
}

export default MyApp;
