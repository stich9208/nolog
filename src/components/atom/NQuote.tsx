import React from "react";

const NQuote = ({ value, id }: any) => {
  return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
};

export default NQuote;
