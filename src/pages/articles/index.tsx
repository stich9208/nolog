import { Badge, Heading, HStack, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { MouseEvent, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { v4 as uuidv4 } from "uuid";

import ListView from "../../components/molecule/ListView";
import { articleListState } from "../../recoil/atom";
import { getDatabases } from "../../util/controller";

const Articles = ({ articleList }: any) => {
  // constant state
  const router = useRouter();
  const ARTICLE_COLUMN = [
    {
      title: ["properties", "Name", "title", 0, "plain_text"],
      render: (elem: string) => (
        <Heading
          key={uuidv4()}
          size="md"
          mb="8px"
          fontFamily="'Gill Sans', sans-serif"
        >
          {elem}
        </Heading>
      ),
    },
    {
      title: ["properties", "Category", "multi_select"],
      render: (elem: any) => {
        return (
          <HStack key={uuidv4()} spacing={1} position="absolute" top="35">
            {elem.map((eachElem: any) => {
              return (
                <Badge
                  key={eachElem.id}
                  variant="outline"
                  fontSize="2xs"
                  colorScheme={eachElem.color}
                >
                  {eachElem.name}
                </Badge>
              );
            })}
          </HStack>
        );
      },
    },
    {
      title: ["created_time"],
      render: (elem: string) => {
        const createdDate = new Date(elem);
        return (
          <Text as="b" key={uuidv4()} w="full" fontSize="xs" textAlign="right">
            {`${createdDate.getFullYear()}-${createdDate.getMonth()}-${createdDate.getDate()}`}
          </Text>
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
