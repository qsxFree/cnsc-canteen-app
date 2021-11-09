import { ScrollView, Stack } from "native-base";
import React, { useContext, useEffect } from "react";
import GeneralHeader from "../../../components/header/GeneralHeader";
import NotificationList from "../../../components/list/NotificationList";
import NotificationContext from "../../../context/NotificationContext";
import * as Notifications from "expo-notifications";

const NotificationScreen = ({ navigation }) => {
  const { setNotificationCount } = useContext(NotificationContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setNotificationCount(0);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Stack>
      <GeneralHeader title="Notification" />
      <ScrollView>
        <NotificationList />
      </ScrollView>
    </Stack>
  );
};

export default NotificationScreen;
