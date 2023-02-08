import React from "react";

const ListView = ({ list }: { list: any[] }) => {
  console.log(list);
  return (
    <ul>
      {list.map((article) => {
        const createdDate = new Date(article.created_time);

        return (
          <li
            key={article.id}
            className="mx-[10px] my-[5px] flex min-h-[70px] cursor-pointer flex-col justify-between border-b-[3px] border-t-[3px] border-navy font-bold text-navy"
          >
            <div>{article.properties.Name.title[0].plain_text}</div>
            <div className="flex items-end justify-end">
              {`${createdDate.getFullYear()}-${createdDate.getMonth()}-${createdDate.getDate()}`}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ListView;
