import { Client } from "@notionhq/client";
import { GetServerSideProps } from "next";
import React from "react";
import { SWRConfig } from "swr";

const SwrComponent = ({ children, fallback }: any) => {
  return <SWRConfig value={{ fallback }}>{children}</SWRConfig>;
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const { NOTION_TOKEN, NOTION_ARTICLE_DB_ID } = process.env;

//   const notion = new Client({
//     auth: NOTION_TOKEN,
//   });

//   const results: any = await notion.databases.query({
//     database_id: `${NOTION_ARTICLE_DB_ID}`,
//   });

//   const articleList = await results.results;

//   return { props: { fallback: { "api/article/list": articleList } } };
// };

export default SwrComponent;
