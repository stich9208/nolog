import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";

import Layout from "../components/common/Layout";
import Loading from "../components/common/Loading";
import { DEFAUT_FONT } from "../styles/font";
import { globalTheme } from "../styles/globalTheme";

const MyApp = ({ Component, pageProps, ...appProps }: AppProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <RecoilRoot>
        <ChakraProvider theme={globalTheme}>
          <main
            className={DEFAUT_FONT.className}
            style={{ backgroundColor: "#FFFDF6" }}
          >
            {appProps.router.pathname === "/" ? (
              <Component {...pageProps} />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </main>
        </ChakraProvider>
      </RecoilRoot>
    </Suspense>
  );
};

export default MyApp;
