import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

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
      <main className="grid h-screen w-full grid-cols-6 grid-rows-7 overflow-hidden border-t-10 border-r-10 border-solid border-navy text-mainFontSize">
        <div className="grid_div border-5 text-6xl col-span-6 row-span-3 flex cursor-default items-center justify-center whitespace-pre-wrap break-keep text-center text-introFontSize">
          <span className="animate-[fadeInOut_7s_ease-in-out_infinite]">
            {WELCOME_TEXT_LIST[textIndex]}
          </span>
        </div>
        <div
          className="grid_div col-span-2 col-start-1 row-span-2 row-start-4"
          onClick={() => router.push("/articles")}
        >
          <div className="grid_div_div">ARTICLES</div>
        </div>
        <div
          className="grid_div col-span-4 col-start-3 row-span-2 row-start-4"
          onClick={() => router.push("/resume")}
        >
          <div className="grid_div_div">RESUME</div>
        </div>

        <div
          className="grid_div col-span-3 col-start-1 row-span-2 row-start-6"
          onClick={() => router.push("/projects")}
        >
          <div className="grid_div_div">PROJECTS</div>
        </div>
        <div className="grid_div col-span-3 col-start-4 row-span-1 row-start-6">
          <div className="grid_div_div">OTHER WORKS</div>
        </div>
        <div className="grid_div col-span-3 col-start-4 row-span-1 row-start-7">
          <div className="grid_div_div">CONTACT</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
