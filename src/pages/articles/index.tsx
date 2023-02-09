import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import Header from "../../components/common/Header";
import ListView from "../../components/molecule/ListView";
import { articleListState } from "../../recoil/atom";
import { getArticleList } from "../../util/controller";

const Articles = ({ articleList }: any) => {
  const ARTICLE_COLUMN = [
    {
      title: ["properties", "Name", "title", 0, "plain_text"],
      render: (elem: string) => (
        <div className="text-[1.2rem] font-bold">{elem}</div>
      ),
    },
    {
      title: ["created_time"],
      render: (elem: string) => {
        const createdDate = new Date(elem);
        return (
          <div className="flex items-end justify-end text-[0.6rem] font-light">
            {`${createdDate.getFullYear()}-${createdDate.getMonth()}-${createdDate.getDate()}`}
          </div>
        );
      },
    },
  ];
  //recoil
  const setArticleList = useSetRecoilState(articleListState);

  console.log(articleList);
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

      <main className="overflow-x-hidden ">
        <Header pageName={"Articles"} />
        {!articleList ? (
          <div>Loading...</div>
        ) : (
          <div className="flex w-screen justify-center">
            <div className="w-full max-w-[550px]">
              <ListView list={articleList} column={ARTICLE_COLUMN} />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const articleList = await getArticleList();
    return {
      props: { articleList },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

export default Articles;
