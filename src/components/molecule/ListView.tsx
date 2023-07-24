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
  const makeCardBody = (column: any, listElem: any) => {
    const newElems = column.map((columnElem: any) => {
      const elem = columnElem.title.reduce((acc: any, curr: any) => {
        try {
          return acc[curr];
        } catch (err) {
          return "";
        }
      }, listElem);

      return columnElem.render(elem);
    });

    return (
      <CardBody
        id={listElem.id}
        onClick={onClickItem}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        p="2"
      >
        <div>
          {newElems[0]}
          {newElems[1]}
        </div>
        {newElems[2]}
      </CardBody>
    );
  };
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
            {makeCardBody(column, listElem)}
          </Card>
        );
      })}
    </Stack>
  );
};

export default ListView;
