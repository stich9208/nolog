import React from "react";

const ListView = ({ list, column }: { list: any[]; column: any[] }) => {
  return (
    <ul>
      {list.map((listElem) => {
        return (
          <li
            key={listElem.id}
            className="mx-[10px] my-[20px] flex min-h-[70px] cursor-pointer flex-col justify-between border-b-[2px] border-t-[2px] border-navy font-bold text-navy"
          >
            {column.map((columnElem) => {
              const elem = columnElem.title.reduce(
                (acc: any, curr: any) => acc[curr],
                listElem
              );
              return columnElem.render(elem);
            })}
          </li>
        );
      })}
    </ul>
  );
};

export default ListView;
