import { Card, CardBody, Image, SimpleGrid, Stack } from "@chakra-ui/react";
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
    // <Stack spacing="4">
    <SimpleGrid
      spacing={3}
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
    >
      {list.map((listElem) => {
        return (
          <Card
            key={listElem.id}
            cursor="pointer"
            overflow="hidden"
            direction={{ base: "column", sm: "row" }}
            _before={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              content: '""',
              backgroundImage: listElem.cover
                ? listElem.cover[listElem.cover.type].url
                : "url('https://images.unsplash.com/photo-1564865878688-9a244444042a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80')",
              backgroundSize: "cover",
              filter: "brightness(40%)",
            }}
          >
            <CardBody
              id={listElem.id}
              onClick={onClickItem}
              display="flex"
              flexDirection="column"
              minH="300px"
              position="relative"
              backdropFilter="blur(2px)"
            >
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
    </SimpleGrid>
  );
};

export default ListView;
