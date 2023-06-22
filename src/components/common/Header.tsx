import { Tab, TabList, Tabs } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PAGE_LIST = ["ARTICLES", "PROJECTS", "RESUME", "OTHER", "CONTACT"];

const Header = () => {
  const router = useRouter();

  const [tabIndex, setTabIndex] = useState<number>();

  // useEffect(() => {
  //   if (tabIndex) router.push(`/${PAGE_LIST[tabIndex - 1].toLowerCase()}`);
  // }, [tabIndex]);

  useEffect(() => {
    switch (router.pathname) {
      case "/articles":
        setTabIndex(1);
        break;
      case "/projects":
        setTabIndex(2);
        break;
      case "/resume":
        setTabIndex(3);
        break;
      case "/other":
        setTabIndex(4);
        break;
      case "/contact":
        setTabIndex(5);
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
        {PAGE_LIST.map((page) => (
          <Link
            href={page.toLocaleLowerCase()}
            key={`/${page}`}
            style={{ width: "100%", height: "100%" }}
          >
            <Tab
              name={page.toLowerCase()}
              _selected={{ fontWeight: "bold" }}
              borderRight="1px"
              w="full"
              h="full"
            >
              {page}
            </Tab>
          </Link>
        ))}
      </TabList>
    </Tabs>
  );
};

export default Header;
1;
