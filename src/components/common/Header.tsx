import { Box, Tab, TabList, Tabs } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PAGE_LIST = ["HOME", "ARTICLES", "PROJECTS", "RESUME"];

const Header = () => {
  const router = useRouter();

  const [tabIndex, setTabIndex] = useState<number>();

  useEffect(() => {
    switch (router.pathname) {
      case "/articles":
        setTabIndex(2);
        break;
      case "/projects":
        setTabIndex(3);
        break;
      case "/resume":
        setTabIndex(4);
        break;
      default:
        setTabIndex(1);
        break;
    }
  }, [router.pathname]);

  return (
    <Tabs
      index={tabIndex && tabIndex - 1}
      display="flex"
      align="center"
      position="sticky"
      top="0"
      mb="5"
      maxW="full"
      minH="70px"
      borderY="1px"
      borderLeft="1px"
      borderColor="212A3E"
      zIndex={2}
      bg="#FFFDF6"
      onChange={(index) => setTabIndex(index + 1)}
    >
      <TabList
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border="none"
        w="full"
      >
        {PAGE_LIST.map((page, idx) => (
          <Link
            href={page === "HOME" ? "/" : `/${page.toLocaleLowerCase()}`}
            key={`/${page}`}
            style={{ width: "100%", height: "100%" }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRight="1px"
              w="full"
              h="full"
              fontSize={["0.75rem", "1rem"]}
              style={{
                fontWeight: `${tabIndex === idx + 1 ? "bold" : "normal"}`,
              }}
            >
              {page}
            </Box>
          </Link>
        ))}
      </TabList>
    </Tabs>
  );
};

export default Header;
1;
