import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { v4 as uuidv4 } from "uuid";

const NTable = ({ value }: any) => {
  const { has_column_header, has_row_header } = value;
  return (
    <TableContainer
      border="1px solid #A0AEC0"
      borderRadius="5px"
      borderBottom="none"
      my="5"
      whiteSpace="pre-wrap"
      fontSize="0.85rem"
      fontWeight="500"
      color="gray.600"
    >
      <Table variant="simple" layout="fixed">
        {has_column_header && (
          <Thead bgColor="orange.300" color="black">
            <Tr>
              {value.children[0].table_row.cells.map((cell: any) => {
                return (
                  <Th key={uuidv4()} textAlign="center" fontSize="0.8rem" p="3">
                    {cell.map((cellText: any) => cellText.plain_text)}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
        )}
        {
          <Tbody verticalAlign="baseline">
            {value.children.map((child: any, idx: number) => {
              if (!has_column_header || idx > 0) {
                return (
                  <Tr key={uuidv4()}>
                    {child.table_row.cells.map((cell: any, idx: number) => {
                      return has_row_header && idx === 0 ? (
                        <Th
                          key={uuidv4()}
                          borderColor="gray.400"
                          verticalAlign="middle"
                        >
                          {cell.map((cellText: any) => cellText.plain_text)}
                        </Th>
                      ) : (
                        <Td
                          key={uuidv4()}
                          py="1"
                          verticalAlign="middle"
                          borderColor="gray.400"
                          borderRight={
                            idx === child.table_row.cells.length - 1
                              ? "none"
                              : "1px solid #A0AEC0"
                          }
                        >
                          {cell.map((cellText: any) => cellText.plain_text)}
                        </Td>
                      );
                    })}
                  </Tr>
                );
              }
            })}
          </Tbody>
        }
        {!has_column_header && !has_row_header && (
          <Tbody>
            {value.children.map((child: any, idx: number) => {
              return (
                <Tr key={uuidv4()}>
                  {child.table_row.cells.map((cell: any, idx: number) => {
                    return (
                      <Td
                        key={uuidv4()}
                        py="1"
                        borderColor="gray.400"
                        borderRight={
                          idx === child.table_row.cells.length - 1
                            ? "none"
                            : "1px solid #A0AEC0"
                        }
                      >
                        {cell.map((cellText: any) => cellText.plain_text)}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        )}
      </Table>
    </TableContainer>
  );
};

export default NTable;
