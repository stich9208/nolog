import { Box, Button, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

import { GithubIcon2, GmailIcon2 } from "../atom/Icon";
import MainCard from "../molecule/MainCard";

const CollapseMenuCard = ({
  idx,
  name,
  isOpen,
  isLast,
  onClickCollapseMenu,
  children,
}: any) => {
  const router = useRouter();
  const variants = {
    open: { flex: 5, padding: "50px" },
    closed: {
      flex: 1,
      padding: "0px",
    },
  };

  const body_variants = {
    open: { display: "block", opacity: 1, transition: { duration: 2 } },
    closed: { display: "none", opacity: 0 },
  };

  const mobile_variants = {
    open: { height: "80px" },
    closed: { height: "20px" },
  };

  return (
    <motion.div
      id={String(idx)}
      variants={variants}
      animate={isOpen ? "open" : "closed"}
      style={{
        display: "flex",
        alignItems: `${isOpen ? "flex-start" : "center"}`,
        fontSize: "1.8rem",
        fontWeight: "500",
        overflow: "hidden",
        cursor: `${isOpen ? "default" : "pointer"}`,
        writingMode: `${isOpen ? "horizontal-tb" : "vertical-rl"}`,
        borderRight: `${isLast ? "none" : "1px solid black"}`,
      }}
      onClick={onClickCollapseMenu}
    >
      <div
        id={String(idx)}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: `${isOpen ? "space-between" : "center"}`,
          alignItems: `${isOpen ? "flex-start" : "center"}`,
          height: "100%",
          position: "relative",
          width: "100%",
          // padding: `${isOpen ? "50px" : "0px"}`,
        }}
      >
        {name}
        <motion.div
          variants={body_variants}
          animate={isOpen ? "open" : "closed"}
          style={{ width: "100%", fontWeight: "400" }}
        >
          <MainCard type={name} />
        </motion.div>
        {isOpen &&
          (name !== "CONTACT" ? (
            <Button
              alignSelf="flex-end"
              onClick={() => router.push(`/${name.toLocaleLowerCase()}`)}
            >
              보러가기
            </Button>
          ) : (
            <Box>
              <Link
                href="https://github.com/stich9208"
                isExternal
                display="flex"
                alignItems="center"
                gap="10px"
                fontSize="22px"
                fontWeight="500"
              >
                <GithubIcon2 />
                https://github.com/stich9208
              </Link>
              <Link
                href="https://mail.google.com/mail/?extsrc=mailto&url=mailto%3Astich9208%40gmail.com"
                isExternal
                display="flex"
                alignItems="center"
                gap="10px"
                fontSize="22px"
                fontWeight="500"
              >
                <GmailIcon2 /> stich9208@gmail.com
              </Link>
            </Box>
          ))}
      </div>
    </motion.div>
  );
};

const MotionCollapseMenuCard = motion(CollapseMenuCard);

export default MotionCollapseMenuCard;
