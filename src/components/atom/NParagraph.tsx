import React from "react";

import Text from "./Text";

const NParagraph = ({ value }: any) => {
  return (
    <p>
      <Text text={value.rich_text} />
    </p>
  );
};

export default NParagraph;
