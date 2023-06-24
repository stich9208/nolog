import { Container } from "@chakra-ui/react";
import React from "react";

import Header from "./Header";

type LayoutPropsType = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <Container
      maxW="full"
      minH="100vh"
      h="full"
      bg="#FFFDF6"
      pb="20px"
      px="none"
    >
      <Header />
      <Container border="1px" maxW="4xl" px="none">
        {children}
      </Container>
    </Container>
  );
};

export default Layout;
