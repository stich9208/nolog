import { Container } from "@chakra-ui/react";
import React from "react";

import Header from "./Header";

type LayoutPropsType = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <Container maxW="container.lg">
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
