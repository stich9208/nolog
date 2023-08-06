import { Box, Button, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

const ProjectCard = () => {
  const router = useRouter();
  return (
    <Box>
      <Text>지금까지의 프로젝트를 정리한 페이지입니다.</Text>
      <Button onClick={() => router.push("/projects")}>GO</Button>
    </Box>
  );
};

export default ProjectCard;
