import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const ResumeCard = () => {
  const router = useRouter();
  return (
    <Box>
      <Text>지금까지의 이력을 정리한 페이지입니다.</Text>
      <Button onClick={() => router.push("/resume")}>GO</Button>
    </Box>
  );
};

export default ResumeCard;
