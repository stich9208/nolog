import icon from "@chakra-ui/icon/dist/icon";
import { Alert } from "@chakra-ui/react";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import NParagraph from "./NParagraph";
import NText from "./NText";

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
