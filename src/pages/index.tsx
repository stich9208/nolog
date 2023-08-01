import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import MotionCollapseMenuCard from "../components/organism/CollapseMenuCard";

const Home: NextPage = () => {
  const router = useRouter();
  //constant state
  const WELCOME_TEXT_LIST = [
    // "안녕하세요, 프론트엔드 개발자 정재욱입니다",
    // "HELLO, I`M JAEWOOK JUNG, FRONTEND DEVELOPER",
    "hi",
    "hello",
    "안녕",
  ];
  const CATEGORY_LIST = ["RESUME", "ARTICLES", "PROJECTS", "OTHER", "CONTACT"];
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
    open: { flex: 5 },
    closed: {
      flex: 1,
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
    <Box display="flex" w="100vw" justifyContent="center">
      <Head>
        <title>Frontend Developer Jaewook Jung</title>
        <meta name="description" content="Frontend Developer J2W`s Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex direction="column" w="98vw">
        <Box
          h={["20vh", "40vh"]}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            fontSize: "min(5vw, 50px)",
            fontWeight: "600",
            textAlign: "center",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            transform: "scale(1, 1.5)",
          }}
        >
          <motion.div
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
        </Box>

        <Box
          display="flex"
          w="100%"
          h={["80vh", "60vh"]}
          py="5"
          borderTop="1px solid black"
        >
          {CATEGORY_LIST.map((category, idx) => (
            <MotionCollapseMenuCard
              key={idx}
              idx={idx}
              category={category}
              isOpen={collapseIndex === idx}
              isLast={idx === CATEGORY_LIST.length - 1}
              onClickCollapseMenu={onClickCollapseMenu}
            />
          ))}
        </Box>
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
    </Box>
  );
};

export default Home;
