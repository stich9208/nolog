import { extendTheme } from "@chakra-ui/react";

const globalTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "var(--pretendard-font)",
      },
    },
  },
});

export { globalTheme };
