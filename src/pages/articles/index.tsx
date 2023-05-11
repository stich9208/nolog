import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { MouseEvent, useEffect } from "react";
import { useSetRecoilState } from "recoil";

import ListView from "../../components/molecule/ListView";
import { articleListState } from "../../recoil/atom";
import { getDatabases } from "../../util/controller";

const Articles = ({ articleList }: any) => {
  // constant variable
  const router = useRouter();
  const ARTICLE_COLUMN = [
    {
      title: ["properties", "Name", "title", 0, "plain_text"],
      render: (elem: string) => <div>{elem}</div>,
    },
    {
      title: ["properties", "Category", "multi_select"],
      render: (elem: any) => {
        return elem.map((eachElem: any) => {
          return (
            <div
              key={eachElem.id}
              style={{ backgroundColor: `${eachElem.color}` }}
            >
              <span>{eachElem.name}</span>
            </div>
          );
        });
      },
    },
    {
      title: ["created_time"],
      render: (elem: string) => {
        const createdDate = new Date(elem);
        return (
          <div>
            {`${createdDate.getFullYear()}-${createdDate.getMonth()}-${createdDate.getDate()}`}
          </div>
        );
      },
    },
  ];

  //recoil
  const setArticleList = useSetRecoilState(articleListState);

  //useEffect
  useEffect(() => {
    setArticleList(articleList);
  }, [articleList]);

  // functions
  const onClickItem = (e: MouseEvent) => {
    const { id } = e.currentTarget;
    router.push(`articles/${id}`);
  };

  return (
    <div>
      <Head>
        <title>blog-articles</title>
        <meta name="description" content="blog-articles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div>
          <div>
            <ListView
              list={articleList}
              column={ARTICLE_COLUMN}
              onClickItem={onClickItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const articleList = await getDatabases();
    return {
      props: { articleList },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

export default Articles;
