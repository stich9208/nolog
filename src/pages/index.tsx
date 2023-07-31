import { Center, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  //constant state
  const WELCOME_TEXT_LIST = [
    "안녕하세요, 프론트엔드 개발자 정재욱입니다",
    "HELLO, I`M JAEWOOK JUNG, FRONTEND DEVELOPER",
  ];
  const callback = useRef(() => {});

  //component state
  const [textIndex, setTextIndex] = useState(0);
  const [collapseIndex, setCollapseIndex] = useState(0);

  //useEffect
  useEffect(() => {
    const textCountCallback = callback.current;
    const interval = setInterval(textCountCallback, 7000);
    return () => clearInterval(interval);
  }, []);

  //functions
  callback.current = () =>
    setTextIndex((index) => (index + 1) % WELCOME_TEXT_LIST.length);

  const onClickCollapseMenu = (e: any) => {
    const { id } = e.currentTarget;
    setCollapseIndex(Number(id));
  };

  const variants = {
    open: { width: "30%" },
    closed: {
      width: "20px",
    },
  };
  const mobile_variants = {
    open: { height: "80px" },
    closed: { height: "20px" },
  };

  const body_variants = {
    open: { display: "block", opacity: 1 },
    closed: { display: "none", opacity: 0 },
  };

  return (
    <>
      <Head>
        <title>Frontend Developer Jaewook Jung</title>
        <meta name="description" content="Frontend Developer J2W`s Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column">
        <motion.div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100vw",
            height: "50vh",
            fontSize: "min(4vw, 50px)",
            fontWeight: "600",
            borderBottom: "1px solid black",
          }}
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            times: [0, 0.5, 1],
          }}
        >
          <span>{WELCOME_TEXT_LIST[textIndex]}</span>
        </motion.div>

        <div
          style={{
            display: "flex",
            // justifyContent: "space-between",
            width: "100vw",
            height: "50vh",
          }}
        >
          {["RESUME", "ARTICLES", "PROJECTS", "OTHER", "CONTACT"].map(
            (category, idx) => (
              <motion.div
                key={idx}
                id={String(idx)}
                variants={variants}
                animate={collapseIndex === idx ? "open" : "closed"}
                style={{
                  height: "100%",
                  overflow: "hidden",
                  writingMode: `${
                    collapseIndex === idx ? "horizontal-tb" : "vertical-rl"
                  }`,
                  border: "1px solid black",
                  width: `${collapseIndex === idx ? "50vw" : "calc(50vw / 4)"}`,
                }}
              >
                <div id={String(idx)} onClick={onClickCollapseMenu}>
                  <div>
                    {category}
                    <motion.div
                      variants={body_variants}
                      animate={collapseIndex === idx ? "open" : "closed"}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
        {/* <div onClick={() => router.push("/resume")}>
          <div>RESUME</div>
        </div>
        <div onClick={() => router.push("/articles")}>
          <div>ARTICLES</div>
        </div>

        <div onClick={() => router.push("/projects")}>
          <div>PROJECTS</div>
        </div>
        <div>
          <div>OTHER</div>
        </div>
        <div>
          <div>CONTACT</div>
        </div> */}
      </Flex>
    </>
  );
};

export default Home;
