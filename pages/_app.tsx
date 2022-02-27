import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import Navbar from "../components/layout/navbar/Navbar";
import theme from "../theme/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Head>
          <title>The Global Institute of Migration</title>
          <link rel="shortcut icon" href={"/logo.png"} />
          <link rel="canonical" href="http://localhost:3000" /> {/* TODO: change canonical url */}
          <meta name={"description"} content={"This is the global institute of migration"} />
          <meta name={"robots"} content={"index, follow"} />
          <meta property={"og:site_name"} content={"The Global Institute of Migration"} />
        </Head>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Component {...pageProps} />
        </ChakraProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
