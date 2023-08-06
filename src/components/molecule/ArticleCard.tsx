import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const ArticleCard = () => {
  const router = useRouter();
  return (
    <Box>
      <Text>학습한 내용들을 글로 정리한 페이지입니다.</Text>
      <Button onClick={() => router.push("/articles")}>gogo</Button>
    </Box>
  );
};

export default ArticleCard;
