import { Box, Container } from "@chakra-ui/react";
import React from "react";

import Header from "./Header";

type LayoutPropsType = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <Container maxW="full" backgroundImage="url('/assets/background.svg')">
      <Header />
      <Box maxW="lg"> {children}</Box>
    </Container>
  );
};

export default Layout;
