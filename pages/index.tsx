import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  // secret_WI9F9EOtxQCiCdM7eUNGBxL1LSNEqELUxmTkl7YYm52v

  return (
    <div className={styles.container}>
      <Head>
        <title>blog</title>
        <meta name="description" content="blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <div>list</div>
        <div>search</div>
      </nav>
      <main className={styles.main}>
        <div className={styles.info}>item1</div>
        <div className={styles.articles}>item1</div>
        <div className={styles.recent_article}>item1</div>
        <div className={styles.projects}>item1</div>
        <div className={styles.portfolio}>item1</div>
        <div className={styles.blank}>item1</div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
