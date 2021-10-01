import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import theme from "./theme";
import RouteConfig from "./src/route/RouteConfig";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <RouteConfig />
    </NativeBaseProvider>
  );
}
