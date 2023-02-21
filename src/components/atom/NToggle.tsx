import React from "react";

import NBlock from "../common/NBlock";
import NText from "./NText";

const NToggle = ({ value }: any) => {
  return (
    <details>
      <summary>
        <NText text={value.rich_text} />
      </summary>
      {value.children?.map((block: any) => (
        <NBlock key={block.id} block={block} />
      ))}
    </details>
  );
};

export default NToggle;
