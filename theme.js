import { extendTheme } from "native-base";
import { DefaultTheme } from "@react-navigation/native";

export default extendTheme({
  colors: {
    primary: {
      50: "#fff1f0",
      100: "#ffccc7",
      200: "#ffa39e",
      300: "#ff7875",
      400: "#ff4d4f",
      500: "#f5222d",
      600: "#cf1322",
      700: "#a8071a",
      800: "#820014",
      900: "#5c0011",
    },
  },
  config: {
    initialColorMode: "light",
  },

  components: {
    Button: {
      baseStyle: {
        rounded: "md",
      },
    },
  },
});

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(130, 0, 20)",
  },
};

export { navigatorTheme };
