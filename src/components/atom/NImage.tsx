import Image from "next/image";
import React from "react";

const NImage = ({ value }: any) => {
  const src = value.type === "external" ? value.external.url : value.file.url;
  const caption = value.caption ? value.caption[0]?.plain_text : "";
  return (
    <figure
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Image src={src} width={700} height={700} alt={caption} />
        {caption && (
          <figcaption style={{ textAlign: "center", opacity: 0.5 }}>
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
};

export default NImage;
