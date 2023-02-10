import { Client } from "@notionhq/client";

// Notion token setting
const { NOTION_TOKEN, NOTION_ARTICLE_DB_ID } = process.env;

const notion = new Client({
  auth: NOTION_TOKEN,
});

// controllers
export const getArticleList = async () => {
  const results: any = await notion.databases.query({
    database_id: `${NOTION_ARTICLE_DB_ID}`,
  });
  return await results.results;
};

export const getEachArticle = async (blockId: any) => {
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
