import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { MouseEvent } from "react";

const PAGE_LIST = ["Articles", "Projects", "Resume", "Other", "Contact"];

const Header = () => {
  const router = useRouter();

  const onClickMenu = (e: MouseEvent) => {
    const { name }: any = e.currentTarget;
    router.push(`/${name}`);
  };

  return (
    <Tabs
      position="sticky"
      top="0"
      mb="5"
      w="full"
      border="none"
      zIndex={2}
      bg="#FFFDF6"
    >
      <TabList border="none">
        {PAGE_LIST.map((page) => (
          <Tab
            key={page}
            name={page.toLowerCase()}
            _selected={{ fontWeight: "bold" }}
            onClick={onClickMenu}
          >
            {page}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

export default Header;
1;
