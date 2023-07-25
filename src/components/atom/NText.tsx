import { Kbd } from "@chakra-ui/react";
import React from "react";

const NText = ({ text }: any) => {
  if (!text) {
    return null;
  }
  return text.map((value: any, idx: number) => {
    const {
      annotations: { bold, color, italic, strikethrough, underline, code },
      text,
    } = value;
    let style: any = { fontSize: "1rem" };
    if (bold) style = { ...style, fontWeight: "600" };
    if (italic) style = { ...style, fontStyle: "italic" };
    if (strikethrough) {
      if (underline) {
        style = {
          ...style,
          textDecoration: "line-through underline",
        };
      } else {
        style = {
          ...style,
          textDecoration: "line-through",
        };
      }
    } else {
      if (underline)
        style = {
          ...style,
          textDecoration: "underline",
        };
    }

    return (
      <span key={idx} style={color !== "default" ? { ...style, color } : style}>
        {code ? (
          <Kbd
            bg="#FFFDF6"
            borderRadius="0px"
            p="0.5"
            borderTop="0px"
            borderX="0px"
            borderBottomWidth="2px"
            borderColor="orange.200"
            backgroundColor="transparent"
          >
            {text.content}
          </Kbd>
        ) : text.link ? (
          <a href={text.link.url}>{text.content}</a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

export default NText;
