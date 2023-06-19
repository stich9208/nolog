import { Box, Card, CardBody, Stack, StackDivider } from "@chakra-ui/react";
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
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {list.map((listElem) => {
            return (
              <Box key={listElem.id} id={listElem.id} onClick={onClickItem}>
                {column.map((columnElem) => {
                  const elem = columnElem.title.reduce(
                    (acc: any, curr: any) => acc[curr],
                    listElem
                  );
                  return columnElem.render(elem);
                })}
              </Box>
            );
          })}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ListView;
