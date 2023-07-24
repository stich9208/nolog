import { Text } from "@chakra-ui/react";
import React from "react";

import NText from "./NText";

const NParagraph = ({ value }: any) => {
  return (
    <Text fontSize={["sm", "md"]} lineHeight="160%" mb="2">
      <NText text={value.rich_text} />
    </Text>
  );
};

export default NParagraph;
