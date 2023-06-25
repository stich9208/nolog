import { Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

import NBlock from "../../components/common/NBlock";
import { getBlocks, getDatabases } from "../../util/controller";

const ArticleDetail = ({ article }: any) => {
  return (
    <Box p="10">
      {article.map((block: any) => (
        <NBlock key={block.id} block={block} />
      ))}
    </Box>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articleList = await getDatabases();
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
    const article = await getBlocks(id);
    return { props: { article } };
  } catch (error) {
    console.log(error);
    return { notFound: true };
  }
};

export default ArticleDetail;
