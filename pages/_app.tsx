import "../styles/globals.css";

import { Do_Hyeon } from "@next/font/google";
import type { AppProps } from "next/app";

const doHyeon = Do_Hyeon({
  subsets: ["latin"],
  weight: "400",
  style: "normal",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={doHyeon.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
