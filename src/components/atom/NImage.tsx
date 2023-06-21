import Image from "next/image";
import React from "react";

const NImage = ({ value }: any) => {
  const src = value.type === "external" ? value.external.url : value.file.url;
  const caption = value.caption ? value.caption[0]?.plain_text : "";
  return (
    <figure>
      <Image src={src} width={500} height={500} alt={caption} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default NImage;
