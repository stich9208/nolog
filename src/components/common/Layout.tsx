import React from "react";

import Header from "./Header";

type LayoutPropsType = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
