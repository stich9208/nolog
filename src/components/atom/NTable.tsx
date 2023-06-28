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
    <TableContainer border="1px solid #E2E8F0" borderRadius="5px" my="5">
      <Table variant="simple">
        {has_column_header && (
          <Thead>
            <Tr>
              {value.children[0].table_row.cells.map((cell: any) => {
                return (
                  <Th key={uuidv4()}>
                    {cell.map((cellText: any) => cellText.plain_text)}
                  </Th>
                );
              })}
            </Tr>
          </Thead>
        )}
        {
          <Tbody>
            {value.children.map((child: any, idx: number) => {
              if (!has_column_header || idx > 0) {
                return (
                  <Tr key={uuidv4()}>
                    {child.table_row.cells.map((cell: any, idx: number) => {
                      return has_row_header && idx === 0 ? (
                        <Th key={uuidv4()}>
                          {cell.map((cellText: any) => cellText.plain_text)}
                        </Th>
                      ) : (
                        <Td key={uuidv4()}>
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
                  {child.table_row.cells.map((cell: any) => {
                    return (
                      <Td key={uuidv4()}>
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
