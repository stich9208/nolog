import { Client } from "@notionhq/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import useSWR from "swr";

import { articleListState } from "../../recoil/atom";
import { getFetcher } from "../../util/fetcher";

const Articles = ({ articleList }: any) => {
  // const { data, error, isLoading } = useSWR("api/article/list", getFetcher, {
  //   fallbackData: articleList,
  // });

  console.log(articleList);

  //recoil
  const setArticleList = useSetRecoilState(articleListState);

  //useEffect
  useEffect(() => {
    setArticleList(articleList);
  }, [articleList]);

  return (
    <div>
      <Head>
        <title>blog-articles</title>
        <meta name="description" content="blog-articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* {isLoading ? (
          <div>Loading...</div>
        ) : ( */}
        <div>
          <ul>
            {articleList.map((article: any) => (
              <li key={article.id}>
                {article.properties.Name.title[0].plain_text}
              </li>
            ))}
          </ul>
        </div>
        {/* )} */}
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { NOTION_TOKEN, NOTION_ARTICLE_DB_ID } = process.env;

  const notion = new Client({
    auth: NOTION_TOKEN,
  });

  const results: any = await notion.databases.query({
    database_id: `${NOTION_ARTICLE_DB_ID}`,
  });

  const articleList = await results.results;

  return { props: { articleList } };
};

export default Articles;
