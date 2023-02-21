import type { Block } from "notion-api-types/responses";
import React from "react";

import NBlock from "../common/NBlock";

const NNestedList = ({ block }: any) => {
  const { type } = block;
  const value = block[type];

  if (!value) return null;

  const isNumberedList: boolean =
    value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return (
      <ol>
        {value.children.map((block: Block) => (
          <NBlock key={block.id} block={block} />
        ))}
      </ol>
    );
  }
  return (
    <ul>
      {value.children.map((block: Block) => (
        <NBlock key={block.id} block={block} />
      ))}
    </ul>
  );
};

export default NNestedList;
