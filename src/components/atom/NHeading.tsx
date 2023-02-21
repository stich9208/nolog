import React from "react";

import NText from "./NText";

const NHeading = ({ value, weight }: any) => {
  switch (weight) {
    case 1:
      return (
        <h1>
          <NText text={value.rich_text} />
        </h1>
      );
    case 2:
      return (
        <h2>
          <NText text={value.rich_text} />
        </h2>
      );
    default:
      return (
        <h3>
          <NText text={value.rich_text} />
        </h3>
      );
  }
};

export default NHeading;
