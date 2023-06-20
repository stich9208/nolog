import { ChakraProvider } from "@chakra-ui/react";
import localFont from "@next/font/local";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";

import Layout from "../components/common/Layout";
import Loading from "../components/common/Loading";

// const KIMM = localFont({
//   src: [
//     {
//       path: "../../public/font/KIMM_light.ttf",
//       weight: "300",
//       style: "normal",
//     },
//     { path: "../../public/font/KIMM_bold.ttf", weight: "700", style: "normal" },
//   ],
// });

const MyApp = ({ Component, pageProps, ...appProps }: AppProps) => {
  return (
    <Suspense fallback={<Loading />}>
      <RecoilRoot>
        <ChakraProvider>
          <main>
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
