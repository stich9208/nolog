import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

import Svg from "../common/Svg";
const ArticleCard = () => {
  const router = useRouter();
  return (
    <Box>
      <Text>학습한 내용들을 정리한 글입니다.</Text>
      <Button onClick={() => router.push("/articles")}>gogo</Button>
    </Box>
  );
};

export default ArticleCard;
