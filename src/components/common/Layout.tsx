import { Box, Container } from "@chakra-ui/react";
import React from "react";

import Header from "./Header";

type LayoutPropsType = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <Container maxW="full" bg="#FFFDF6" mb="20px">
      <Header />
      <Container maxW="4xl">{children}</Container>
    </Container>
  );
};

export default Layout;
