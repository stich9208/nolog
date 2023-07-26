import React from "react";

import NBookmark from "../atom/NBookmark";
import NCallout from "../atom/NCallout";
import NCode from "../atom/NCode";
import NDivider from "../atom/NDivider";
import NFile from "../atom/NFile";
import NHeading from "../atom/NHeading";
import NImage from "../atom/NImage";
import NNestedList from "../atom/NNestedList";
import NParagraph from "../atom/NParagraph";
import NQuote from "../atom/NQuote";
import NTable from "../atom/NTable";
import NText from "../atom/NText";
import NTodo from "../atom/NTodo";
import NToggle from "../atom/NToggle";
import CannotFindBlock from "./CannotFindBlock";

const NBlock = ({ block, numberedListMap }: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "table":
      return <NTable value={value} />;
    case "paragraph":
      return <NParagraph value={value} />;
    case "heading_1":
    case "heading_2":
    case "heading_3":
      const headingWeight = type.split("_")[1];
      return <NHeading value={value} weight={Number(headingWeight)} />;
    case "bulleted_list_item":
      return (
        <li
          style={{
            paddingInlineStart: "1ch",
            marginBottom: "0.5rem",
            background: "url(/assets/pin_icon.png) no-repeat 0px 1px",
            backgroundSize: "20px 20px",
            listStyleType: "none",
            padding: "0px 0px 8px 27px",
            fontSize: "0.8rem",
          }}
        >
          <NText text={value.rich_text} />
          {value.has_children && <NNestedList block={block} />}
        </li>
      );
    case "numbered_list_item":
      return (
        <ol
          style={{
            paddingInlineStart: "2ch",
            marginBottom: "0.5rem",
          }}
          start={numberedListMap}
        >
          <li>
            <NText text={value.rich_text} />
            {value.has_children && <NNestedList block={block} />}
          </li>
        </ol>
      );
    case "to_do":
      return <NTodo id={id} value={value} />;
    case "toggle":
      return <NToggle value={value} />;
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      return <NImage value={value} />;
    case "divider":
      return <NDivider />;
    case "quote":
      return <NQuote value={value} id={id} />;
    case "code":
      return <NCode value={value} id={id} />;
    case "file":
      return <NFile value={value} />;
    case "bookmark":
      return <NBookmark value={value} />;
    case "callout":
      return <NCallout value={value} />;
    default:
      console.log("cannot find", block);
      return <CannotFindBlock />;
  }
};

export default NBlock;
