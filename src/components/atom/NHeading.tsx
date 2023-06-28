import { Heading } from "@chakra-ui/react";
import React from "react";

const NHeading = ({ value, weight }: any) => {
  switch (weight) {
    case 1:
      return (
        <Heading as="h1" size="xl" my="5">
          {value.rich_text[0].plain_text}
        </Heading>
      );
    case 2:
      return (
        <Heading as="h2" size="lg" my="5">
          {value.rich_text[0].plain_text}
        </Heading>
      );
    default:
      return (
        <Heading as="h3" size="md" my="5">
          {value.rich_text[0].plain_text}
        </Heading>
      );
  }
};

export default NHeading;
