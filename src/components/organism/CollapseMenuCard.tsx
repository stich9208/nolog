import { motion } from "framer-motion";
import React from "react";

const CollapseMenuCard = ({
  idx,
  category,
  isOpen,
  isLast,
  onClickCollapseMenu,
}: any) => {
  const variants = {
    open: { flex: 5 },
    closed: {
      flex: 1,
    },
  };

  const body_variants = {
    open: { display: "block", opacity: 1 },
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
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.8rem",
        fontWeight: "500",

        overflow: "hidden",
        cursor: `${isOpen ? "default" : "pointer"}`,
        writingMode: `${isOpen ? "horizontal-tb" : "vertical-rl"}`,
        borderRight: `${isLast ? "none" : "1px solid black"}`,
      }}
      onClick={onClickCollapseMenu}
    >
      <div id={String(idx)}>
        {category}
        <motion.div
          variants={body_variants}
          animate={isOpen ? "open" : "closed"}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </motion.div>
      </div>
    </motion.div>
  );
};

const MotionCollapseMenuCard = motion(CollapseMenuCard);

export default MotionCollapseMenuCard;
