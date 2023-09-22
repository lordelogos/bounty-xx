import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: `'Ubuntu', sans-serif`,
      },
      "a.active": {
        color: "rgba(231, 29, 54, 1)",
      },
    },
  },
});
