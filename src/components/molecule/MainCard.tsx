import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  type: string;
}

const MainCard = ({ type }: Props) => {
  return (
    <Box w="100%">
      <>
        <Box display="flex" flexDir="column" gap="10">
          <Text fontSize="22">
            {(() => {
              switch (type) {
                case "RESUME":
                  return "지금까지의 이력을 정리한 페이지입니다.";
                case "PROJECTS":
                  return "지금까지의 프로젝트를 정리한 페이지입니다.";
                case "ARTICLES":
                  return "학습한 내용들을 글로 정리한 페이지입니다.";
                default:
                  return "";
              }
            })()}
          </Text>
          <Image
            alignSelf="center"
            src={`/assets/${type.toLocaleLowerCase()}.png`}
            alt={"icon"}
            w="140px"
          />
        </Box>
      </>
    </Box>
  );
};

export default MainCard;
