import React from "react";

import NText from "./NText";

const NTodo = ({ id, value }: any) => {
  return (
    <div>
      <label htmlFor={id}>
        <input type="checkbox" id={id} defaultChecked={value.checked} />
        <NText text={value.rich_text} />
      </label>
    </div>
  );
};

export default NTodo;
