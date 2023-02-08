import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import Header from "../../components/common/Header";
import ListView from "../../components/molecule/ListView";
import { articleListState } from "../../recoil/atom";
import { getArticleList } from "../../util/controller";

const Articles = ({ articleList }: any) => {
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

      <main className="overflow-x-hidden ">
        <Header pageName={"Articles"} />
        {!articleList ? (
          <div>Loading...</div>
        ) : (
          <div className="flex w-screen justify-center">
            <div className="w-full max-w-[550px]">
              <ListView list={articleList} />
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
