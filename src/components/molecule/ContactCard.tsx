import { Box, Link } from "@chakra-ui/react";
import React from "react";

import { GithubIcon2, GmailIcon2 } from "../atom/Icon";

const ContactCard = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="10px"
      position="absolute"
      top="30%"
    >
      <Link
        href="https://github.com/stich9208"
        isExternal
        display="flex"
        alignItems="center"
        gap="10px"
        fontSize="22px"
        fontWeight="500"
      >
        <GithubIcon2 />
        https://github.com/stich9208
      </Link>

      <Link
        href="https://mail.google.com/mail/?extsrc=mailto&url=mailto%3Astich9208%40gmail.com"
        isExternal
        display="flex"
        alignItems="center"
        gap="10px"
        fontSize="22px"
        fontWeight="500"
      >
        <GmailIcon2 /> stich9208@gmail.com
      </Link>
    </Box>
  );
};

export default ContactCard;
