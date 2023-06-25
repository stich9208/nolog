import React from "react";

const NText = ({ text }: any) => {
  if (!text) {
    return null;
  }
  return text.map((value: any, idx: number) => {
    const {
      annotations: { bold, color, italic, strikethrough, underline },
      text,
    } = value;
    let style = {};
    if (bold) style = { ...style, fontWeight: "bold" };
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
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
};

export default NText;
