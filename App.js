import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import theme from "./theme";
import RouteConfig from "./src/route/RouteConfig";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <RouteConfig />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
