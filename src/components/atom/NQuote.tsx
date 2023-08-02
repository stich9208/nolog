import { Alert } from "@chakra-ui/react";
import React from "react";

import NParagraph from "./NParagraph";

const NQuote = ({ value, id }: any) => {
  return (
    <Alert
      key={id}
      variant="left-accent"
      backgroundColor="orange.100"
      borderColor="orange.500"
      opacity="0.7"
      mb="3"
    >
      <NParagraph value={value} style={{ marginBottom: "0px" }} />
    </Alert>
  );
};

export default NQuote;
