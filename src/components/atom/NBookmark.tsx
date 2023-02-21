import React from "react";

const NBookmark = ({ value }: any) => {
  const href = value.url;
  return (
    <a href={href} target="_brank">
      {href}
    </a>
  );
};

export default NBookmark;
