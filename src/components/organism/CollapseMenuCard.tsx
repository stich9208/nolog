import { motion } from "framer-motion";
import React from "react";

const CollapseMenuCard = ({
  idx,
  category,
  isOpen,
  isLast,
  onClickCollapseMenu,
  children,
}: any) => {
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
          justifyContent: "space-between",
          alignItems: `${isOpen ? "flex-start" : "center"}`,
          height: "100%",
          position: "relative",
          // padding: `${isOpen ? "50px" : "0px"}`,
        }}
      >
        {category}
        <motion.div
          variants={body_variants}
          animate={isOpen ? "open" : "closed"}
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  );
};

const MotionCollapseMenuCard = motion(CollapseMenuCard);

export default MotionCollapseMenuCard;
