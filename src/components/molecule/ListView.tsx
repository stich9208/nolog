import { Card, CardBody, Image, Stack, StackDivider } from "@chakra-ui/react";
import React, { MouseEventHandler } from "react";

const ListView = ({
  list,
  column,
  onClickItem,
}: {
  list: any[];
  column: any[];
  onClickItem: MouseEventHandler;
}) => {
  return (
    <Stack spacing="0" divider={<StackDivider borderColor="black" />}>
      {list.map((listElem) => {
        return (
          <Card
            key={listElem.id}
            cursor="pointer"
            overflow="hidden"
            direction={{ base: "column", sm: "row" }}
            backgroundColor="transparent"
            borderRadius="0"
            boxShadow="none"
            h="110"
          >
            <CardBody
              id={listElem.id}
              onClick={onClickItem}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="0"
            >
              {/* <Image
                src={
                  listElem.cover
                    ? listElem.cover[listElem.cover.type].url
                    : "https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                }
                alt="thumbnail"
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
              /> */}
              {column.map((columnElem) => {
                const elem = columnElem.title.reduce((acc: any, curr: any) => {
                  try {
                    return acc[curr];
                  } catch (err) {
                    return "";
                  }
                }, listElem);
                if (elem !== "") {
                  return columnElem.render(elem);
                }
              })}
            </CardBody>
          </Card>
        );
      })}
    </Stack>
  );
};

export default ListView;
