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
            w="full"
            h="full"
            minH="110"
          >
            <CardBody
              id={listElem.id}
              onClick={onClickItem}
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              p="2"
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
    </Stack>
  );
};

export default ListView;
