import { Alert } from "@chakra-ui/react";
import React from "react";

import NParagraph from "./NParagraph";

const NCallout = ({ value }: any) => {
  return (
    <Alert display="flex" backgroundColor="orange.100" borderRadius="10px">
      <span
        style={{
          alignSelf: "flex-start",
          marginRight: "5px",
          fontSize: "20px",
        }}
      >
        {value.icon.emoji}
      </span>
      <NParagraph value={value} />
    </Alert>
  );
};

export default NCallout;
