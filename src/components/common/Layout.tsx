import { Box, Container } from "@chakra-ui/react";
import React from "react";

import Header from "./Header";

type LayoutPropsType = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <Container maxW="full" bg="#FFFDF6">
      <Header />
      <Container maxW="3xl">{children}</Container>
    </Container>
  );
};

export default Layout;
