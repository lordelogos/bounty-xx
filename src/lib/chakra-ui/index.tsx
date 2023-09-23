import { switchAnatomy } from "@chakra-ui/anatomy";
import { extendTheme, createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  thumb: {
    bg: "rgb(238, 109, 124)",
  },
  track: {
    bg: "rgb(248, 228, 220)",
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });

export const theme = extendTheme({
  components: { Switch: switchTheme },
  colors: {
    brand: {
      500: "#E71D36",
    },
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: `'Ubuntu', sans-serif`,
        background: "#FAFAFA",
      },
      "a.active": {
        color: "rgba(231, 29, 54, 1)",
      },
    },
  },
});
