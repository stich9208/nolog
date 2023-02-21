import React from "react";

import NText from "./NText";

const NParagraph = ({ value }: any) => {
  return (
    <p>
      <NText text={value.rich_text} />
    </p>
  );
};

export default NParagraph;
