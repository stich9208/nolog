import { Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { useEffect, useState } from "react";

import NBlock from "../../components/common/NBlock";
import { getBlocks, getDatabases } from "../../util/controller";

const ArticleDetail = ({ article }: any) => {
  // component state
  const [numberedListMap, setNumberedListMap] = useState<any>();

  useEffect(() => {
    let count = 0;
    let countList = new Map();
    article.map((block: any, idx: number) => {
      if (block.type === "numbered_list_item") {
        countList.set(idx, count + 1);
        count++;
      } else {
        if (count !== 0) count = 0;
      }
    });
    setNumberedListMap(countList);
  }, []);

  return (
    numberedListMap && (
      <Box p={["2", "10"]}>
        {article.map((block: any, idx: number) => {
          return (
            <NBlock
              key={block.id}
              block={block}
              numberedListMap={
                block.type === "numbered_list_item"
                  ? numberedListMap.get(idx)
                  : null
              }
            />
          );
        })}
      </Box>
    )
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
