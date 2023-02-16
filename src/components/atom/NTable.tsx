import React from "react";
import { v4 as uuidv4 } from "uuid";

const NTable = ({ value }: any) => {
  return (
    <table>
      <thead>
        <tr>
          {value.children[0].table_row.cells.map((cell: any) => {
            return (
              <td key={uuidv4()}>
                {cell.map((cellText: any) => cellText.plain_text)}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {value.children.map((child: any, idx: number) => {
          if (idx > 0) {
            return (
              <tr key={uuidv4()}>
                {child.table_row.cells.map((cell: any) => {
                  return (
                    <td key={uuidv4()}>
                      {cell.map((cellText: any) => cellText.plain_text)}
                    </td>
                  );
                })}
              </tr>
            );
          }
        })}
      </tbody>
    </table>
  );
};

export default NTable;
