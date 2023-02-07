import { Client } from "@notionhq/client";
import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import useSWR from "swr";

import SwrComponent from "../../components/common/SwrComponent";
import { articleListState } from "../../recoil/atom";
import { getFetcher } from "../../util/fetcher";

const Articles = () => {
  const { data, error, isLoading } = useSWR("api/article/list", getFetcher);

  //recoil
  const setArticleList = useSetRecoilState(articleListState);

  //useEffect
  useEffect(() => {
    setArticleList(data);
  }, [data]);

  return (
    <div>
      <Head>
        <title>blog-articles</title>
        <meta name="description" content="blog-articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <ul>
              {data.map((article: any) => (
                <li key={article.id}>
                  {article.properties.Name.title[0].plain_text}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

const SwrWrapper = ({ fallback }: any) => {
  return (
    <SwrComponent fallback={fallback}>
      <Articles />
    </SwrComponent>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { NOTION_TOKEN, NOTION_ARTICLE_DB_ID } = process.env;

  const notion = new Client({
    auth: "ug",
  });

  try {
    const results: any = await notion.databases.query({
      database_id: `${NOTION_ARTICLE_DB_ID}`,
    });
    const articleList = await results.results;
    return {
      props: { fallback: { "api/article/list": articleList, error: false } },
    };
  } catch (error) {
    return { props: { fallback: { "api/article/list": null, error: true } } };
  }
};

export default SwrWrapper;
