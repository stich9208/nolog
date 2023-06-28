import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
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
      <OrderedList style={{ listStylePosition: "outside" }}>
        {value.children.map((block: Block) => (
          <NBlock key={block.id} block={block} />
        ))}
      </OrderedList>
    );
  }
  return (
    <UnorderedList style={{ listStylePosition: "outside" }}>
      {value.children.map((block: Block) => (
        <NBlock key={block.id} block={block} />
      ))}
    </UnorderedList>
  );
};

export default NNestedList;
