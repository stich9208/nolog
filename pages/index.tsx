import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();
  //constant state
  const WELCOME_TEXT_LIST = [
    "안녕하세요 프론트엔드 개발자 정재욱입니다",
    "HELLO, I`M JAEWOOK JUNG, FRONTEND DEVELOPER",
  ];
  const callback = useRef(() => {});

  //component state
  const [textIndex, setTextIndex] = useState(0);

  //useEffect
  useEffect(() => {
    const textCountCallback = callback.current;
    const interval = setInterval(textCountCallback, 7000);
    return () => clearInterval(interval);
  }, []);

  //functions
  callback.current = () =>
    setTextIndex((index) => (index + 1) % WELCOME_TEXT_LIST.length);

  return (
    <div className="h-screen text-navy">
      <Head>
        <title>blog</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Nabla&display=swap"
          rel="stylesheet"
        /> */}
      </Head>
      <main className="grid-rows-7 grid h-full grid-cols-6 overflow-hidden border-t-10 border-r-10 border-solid border-navy text-mainFontSize">
        <div className="border-5 col-span-6 row-span-3">
          <span>{WELCOME_TEXT_LIST[textIndex]}</span>
        </div>
        <div
          className={styles.articles}
          onClick={() => router.push("/articles")}
        >
          <div>ARTICLES</div>
        </div>
        <div className={styles.resume}>
          <div>RESUME</div>
        </div>

        <div className={styles.projects}>
          <div>PROJECTS</div>
        </div>
        <div className={styles.other}>
          <div>OTHER WORKS</div>
        </div>
        <div className={styles.contact}>
          <div>CONTACT</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
