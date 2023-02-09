import "../styles/globals.css";

import localFont from "@next/font/local";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <main className={KIMM.className}>
        <Component {...pageProps} />
      </main>
    </RecoilRoot>
  );
}

export default MyApp;
