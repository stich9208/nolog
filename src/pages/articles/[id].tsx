import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import { getArticleList, getEachArticle } from "../../util/controller";
import { renderBlock } from "../../util/render";

const ArticleDetail = ({ article }: any) => {
  console.log(article);
  return <div>{article.map((elem: any) => renderBlock(elem))}</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articleList = await getArticleList();
  const pathList = articleList.map((article: any) => ({
    params: { id: article.id },
  }));
  return {
    paths: pathList,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id: any = params?.id;

  try {
    const article = await getEachArticle(id);
    return { props: { article } };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

export default ArticleDetail;
