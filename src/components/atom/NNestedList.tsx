import type { Block } from "notion-api-types/responses";
import React from "react";

import { renderBlock } from "../../util/render";

const NNestedList = ({ block }: any) => {
  const { type } = block;
  const value = block[type];

  if (!value) return null;

  const isNumberedList: boolean =
    value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return <ol>{value.children.map((block: Block) => renderBlock(block))}</ol>;
  }
  return <ul>{value.children.map((block: Block) => renderBlock(block))}</ul>;
};

export default NNestedList;
