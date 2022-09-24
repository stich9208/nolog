import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const WELCOME_TEXT_LIST = [
    { lang: "kr", text: "안녕하세요 프론트엔드 개발자 정재욱입니다" },
    {
      lang: "en",
      text: "HELLO, I`M JAEWOOK JUNG, FRONTEND DEVELOPER",
    },
  ];

  const callback = useRef(() => {});

  const [textCount, setTextCount] = useState(0);

  const changeTextCount = () =>
    setTextCount((textCount) => (textCount + 1) % WELCOME_TEXT_LIST.length);

  callback.current = changeTextCount;

  useEffect(() => {
    const textCountCallback: any = callback.current;

    const interval = setInterval(textCountCallback, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>blog</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Nabla&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <nav className={styles.nav}>
        <div>LIST</div>
        <div>SEARCH</div>
      </nav> */}
      <main className={styles.main}>
        <div className={styles.info}>
          <span>{WELCOME_TEXT_LIST[textCount].text}</span>
        </div>
        <div className={styles.articles}>
          <div>ARTICLES</div>
        </div>
        <div className={styles.recent_article}>
          <div>RECENT ARTICLE</div>
        </div>
        <div className={styles.projects}>
          <div>PROJECTS</div>
        </div>
        <div className={styles.portfolio}>
          <div>PORTFOLIO</div>
        </div>
        <div className={styles.blank}>
          <div>item1</div>
        </div>
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
