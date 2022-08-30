import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId: any) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPage = async (pageId: any) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId: any) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor }: any = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};

// const renderNestedList = (block) => {
//   const { type } = block;
//   const value = block[type];
//   if (!value) return null;

//   const isNumberedList = value.children[0].type === "numbered_list_item";

//   if (isNumberedList) {
//     return <ol>{value.children.map((block) => renderBlock(block))}</ol>;
//   }
//   return <ul>{value.children.map((block) => renderBlock(block))}</ul>;
// };

// const renderBlock = (block) => {
//   const { type, id } = block;
//   const value = block[type];

//   switch (type) {
//     case "paragraph":
//       return (
//         <p>
//           <Text text={value.text} />
//         </p>
//       );
//     case "heading_1":
//       return (
//         <h1>
//           <Text text={value.text} />
//         </h1>
//       );
//     case "heading_2":
//       return (
//         <h2>
//           <Text text={value.text} />
//         </h2>
//       );
//     case "heading_3":
//       return (
//         <h3>
//           <Text text={value.text} />
//         </h3>
//       );
//     case "bulleted_list_item":
//     case "numbered_list_item":
//       return (
//         <li>
//           <Text text={value.text} />
//           {!!value.children && renderNestedList(block)}
//         </li>
//       );
//     case "to_do":
//       return (
//         <div>
//           <label htmlFor={id}>
//             <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
//             <Text text={value.text} />
//           </label>
//         </div>
//       );
//     case "toggle":
//       return (
//         <details>
//           <summary>
//             <Text text={value.text} />
//           </summary>
//           {value.children?.map((block) => (
//             <Fragment key={block.id}>{renderBlock(block)}</Fragment>
//           ))}
//         </details>
//       );
//     case "child_page":
//       return <p>{value.title}</p>;
//     case "image":
//       const src =
//         value.type === "external" ? value.external.url : value.file.url;
//       const caption = value.caption ? value.caption[0]?.plain_text : "";
//       return (
//         <figure>
//           <img src={src} alt={caption} />
//           {caption && <figcaption>{caption}</figcaption>}
//         </figure>
//       );
//     case "divider":
//       return <hr key={id} />;
//     case "quote":
//       return <blockquote key={id}>{value.text[0].plain_text}</blockquote>;
//     case "code":
//       return (
//         <pre className={styles.pre}>
//           <code className={styles.code_block} key={id}>
//             {value.text[0].plain_text}
//           </code>
//         </pre>
//       );
//     case "file":
//       const src_file =
//         value.type === "external" ? value.external.url : value.file.url;
//       const splitSourceArray = src_file.split("/");
//       const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
//       const caption_file = value.caption ? value.caption[0]?.plain_text : "";
//       return (
//         <figure>
//           <div className={styles.file}>
//             📎{" "}
//             <Link href={src_file} passHref>
//               {lastElementInArray.split("?")[0]}
//             </Link>
//           </div>
//           {caption_file && <figcaption>{caption_file}</figcaption>}
//         </figure>
//       );
//     case "bookmark":
//       const href = value.url;
//       return (
//         <a href={href} target="_brank" className={styles.bookmark}>
//           {href}
//         </a>
//       );
//     default:
//       return `❌ Unsupported block (${
//         type === "unsupported" ? "unsupported by Notion API" : type
//       })`;
//   }
// };

// export const Text = ({ text }) => {
//     if (!text) {
//       return null;
//     }
//     return text.map((value) => {
//       const {
//         annotations: { bold, code, color, italic, strikethrough, underline },
//         text,
//       } = value;
//       return (
//         <span
//           className={[
//             bold ? styles.bold : "",
//             code ? styles.code : "",
//             italic ? styles.italic : "",
//             strikethrough ? styles.strikethrough : "",
//             underline ? styles.underline : "",
//           ].join(" ")}
//           style={color !== "default" ? { color } : {}}
//         >
//           {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
//         </span>
//       );
//     });
//   };
