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
