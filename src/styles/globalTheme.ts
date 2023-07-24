import { extendTheme } from "@chakra-ui/react";

const globalTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "var(--DEFAUT_FONT)",
        fontWieght: "300",
      },
    },
  },
});

export { globalTheme };
