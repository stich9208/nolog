import React from "react";
import { CopyBlock, vs2015 } from "react-code-blocks";

const NCode = ({ value, id }: any) => {
  return (
    <pre>
      <CopyBlock
        key={id}
        text={value.rich_text[0].plain_text}
        language={value.language}
        theme={vs2015}
        codeBlock={true}
        customStyle={{
          height: "auto",
          borderRadius: "10px",
          boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
          fontSize: "0.85rem",
          margin: "10px 0px",
        }}
      />
    </pre>
  );
};

export default NCode;
