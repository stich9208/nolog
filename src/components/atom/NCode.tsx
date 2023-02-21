import React from "react";

const NCode = ({ value, id }: any) => {
  return (
    <pre>
      <code key={id}>{value.rich_text[0].plain_text}</code>
    </pre>
  );
};

export default NCode;
