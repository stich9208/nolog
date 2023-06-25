import { Heading } from "@chakra-ui/react";
import React from "react";

const NHeading = ({ value, weight }: any) => {
  switch (weight) {
    case 1:
      return <Heading as="h1">{value.rich_text[0].plain_text}</Heading>;
    case 2:
      return <Heading as="h2">{value.rich_text[0].plain_text}</Heading>;
    default:
      return <Heading as="h3">{value.rich_text[0].plain_text}</Heading>;
  }
};

export default NHeading;
