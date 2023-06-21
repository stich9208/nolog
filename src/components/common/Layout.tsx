import { Box, Container } from "@chakra-ui/react";
import React from "react";

import Header from "./Header";

type LayoutPropsType = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <Container maxW="full" minH="100vh" bg="#FFFDF6" pb="20px" px="none">
      <Header />
      <Container maxW="4xl">{children}</Container>
    </Container>
  );
};

export default Layout;
