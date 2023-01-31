import type { NextApiRequest, NextApiResponse } from "next";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users: any = await notion.users.list({});
  res.status(200).json({ users });
}
