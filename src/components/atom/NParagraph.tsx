import { Text } from "@chakra-ui/react";
import React from "react";

import NText from "./NText";

const NParagraph = ({ value }: any) => {
  return (
    <Text fontSize={["md", "lg"]} lineHeight="160%" mb="3">
      <NText text={value.rich_text} />
    </Text>
  );
};

export default NParagraph;
