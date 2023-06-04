import type { AppProps } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import Background from "@/components/Background";
import Sidebar from "@/components/Sidebar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>ChatIT</title>
          <meta name="description" content="Chat with random people" />
        </Head>
        <Component {...pageProps} />
        <Sidebar {...pageProps}/>
      </ChakraProvider>
    </>
  );
}
