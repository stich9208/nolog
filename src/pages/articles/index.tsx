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
      name: "title",
      title: ["properties", "Name", "title", 0, "plain_text"],
      render: (elem: string) => (
        <Heading
          key={uuidv4()}
          as="h3"
          fontSize="1.2rem"
          fontWeight="600"
          mb="5px"
        >
          {elem}
        </Heading>
      ),
    },
    {
      name: "badge",
      title: ["properties", "Category", "multi_select"],
      render: (elem: any) => {
        return (
          <HStack key={uuidv4()} spacing={1} ml="2">
            {elem.map((eachElem: any) => {
              return (
                <Badge
                  key={eachElem.id}
                  variant="subtle"
                  fontSize="2xs"
                  colorScheme={eachElem.color}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      marginBottom: "-2px",
                      padding: "2px",
                    }}
                  >
                    {eachElem.name}
                  </span>
                </Badge>
              );
            })}
          </HStack>
        );
      },
    },
    {
      name: "created_date",
      title: ["created_time"],
      render: (elem: string) => {
        const createdDate = new Date(elem);
        return (
          <Text
            fontWeight="400"
            key={uuidv4()}
            w="full"
            fontSize="xs"
            textAlign="right"
          >
            {`${createdDate.getFullYear()}-${
              createdDate.getMonth() < 10
                ? `0${createdDate.getMonth()}`
                : createdDate.getMonth()
            }-${
              createdDate.getDate() < 10
                ? `0${createdDate.getDate()}`
                : createdDate.getDate()
            }`}
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
        <ListView
          list={articleList}
          column={ARTICLE_COLUMN}
          onClickItem={onClickItem}
        />
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
