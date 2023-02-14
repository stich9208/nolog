import "../styles/globals.css";

import localFont from "@next/font/local";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import Layout from "../components/common/Layout";

const KIMM = localFont({
  src: [
    {
      path: "../../public/font/KIMM_light.ttf",
      weight: "300",
      style: "normal",
    },
    { path: "../../public/font/KIMM_bold.ttf", weight: "700", style: "normal" },
  ],
});

const MyApp = ({ Component, pageProps, ...appProps }: AppProps) => {
  return (
    <RecoilRoot>
      <main>
        {appProps.router.pathname === "/" ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </main>
    </RecoilRoot>
  );
};

export default MyApp;
