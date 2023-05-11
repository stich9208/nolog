import React, { MouseEventHandler } from "react";

import styles from "../../styles/ListView.module.css";

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
    <ul className={styles.list_container}>
      {list.map((listElem) => {
        return (
          <li
            key={listElem.id}
            id={listElem.id}
            className="each_article"
            onClick={onClickItem}
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
