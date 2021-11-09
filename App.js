import React, { useState, useEffect, useRef } from "react";
import { NativeBaseProvider } from "native-base";
import theme from "./theme";
import RouteConfig from "./src/route/RouteConfig";
import { QueryClient, QueryClientProvider } from "react-query";
import { TokenProvider } from "./src/context/TokenContext";
import { NotificationProvider } from "./src/context/NotificationContext";
import TokenReference from "./src/hooks/useToken";
import registerPushNotification from "./src/service/registerPushNotification";
import * as Notifications from "expo-notifications";

const queryClient = new QueryClient();

export default App = () => {
  const { token, setToken } = TokenReference.useToken();
  const [notificationCount, setNotificationCount] = useState(0);

  console.log(token);

  const _handleIncomingNotification = (notif) => {
    setNotificationCount(notificationCount + 1);
    console.log(notif.request.content);
  };

  useEffect(() => {
    registerPushNotification();
    Notifications.addNotificationReceivedListener(_handleIncomingNotification);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider theme={theme}>
        <NotificationProvider
          value={{
            notificationCount: notificationCount,
            setNotificationCount: setNotificationCount,
          }}
        >
          <TokenProvider value={{ token: token, setToken: setToken }}>
            <RouteConfig />
          </TokenProvider>
        </NotificationProvider>
      </NativeBaseProvider>
    </QueryClientProvider>
  );
};
