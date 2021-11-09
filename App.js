import React, { useState, useEffect } from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import theme from "./theme";
import RouteConfig from "./src/route/RouteConfig";
import { QueryClient, QueryClientProvider } from "react-query";
import { TokenProvider } from "./src/context/TokenContext";
import TokenReference from "./src/hooks/useToken";

const queryClient = new QueryClient();

export default App = () => {
  const { token, setToken } = TokenReference.useToken();

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <TokenProvider value={{ token: token, setToken: setToken }}>
          <RouteConfig />
        </TokenProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};
