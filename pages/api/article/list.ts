import { Client } from "@notionhq/client";
import type { NextApiRequest, NextApiResponse } from "next";

const { NOTION_TOKEN, NOTION_ARTICLE_DB_ID } = process.env;

const notion = new Client({
  auth: NOTION_TOKEN,
});

export default async function getArticleList(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const results: any = await notion.databases.query({
      database_id: `${NOTION_ARTICLE_DB_ID}`,
    });
    res.status(200).json(results.results);
  } catch (error: any) {
    res.status(error.status).json(error.code);
  }
}
