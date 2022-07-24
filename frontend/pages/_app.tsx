import "../styles/globals.css";
import type { AppProps } from "next/app";
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
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
    </ApolloProvider>
  );
}

export default MyApp;
