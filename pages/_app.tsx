import type { AppProps } from "next/app";
import { useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Head from "next/head";
import { Box, ChakraProvider } from "@chakra-ui/react";

import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/footer/Footer";
import theme from "../theme/theme";

import "@fontsource/saira-semi-condensed/100.css";
import "@fontsource/saira-semi-condensed/200.css";
import "@fontsource/saira-semi-condensed/300.css";
import "@fontsource/saira-semi-condensed/400.css";
import "@fontsource/saira-semi-condensed/500.css";
import "@fontsource/saira-semi-condensed/600.css";
import "@fontsource/saira-semi-condensed/700.css";
import "@fontsource/saira-semi-condensed/800.css";
import "@fontsource/saira-semi-condensed/900.css";
import "@fontsource/merriweather/300.css";
import "@fontsource/merriweather/400.css";
import "@fontsource/merriweather/700.css";
import "@fontsource/merriweather/900.css";

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
          <Box minH={"100vh"}>
            <Navbar />
            <Component {...pageProps} />
          </Box>
          <Footer />
        </ChakraProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
