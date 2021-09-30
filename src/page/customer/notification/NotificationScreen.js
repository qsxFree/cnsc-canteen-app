import { ScrollView, Stack } from "native-base";
import React from "react";
import GeneralHeader from "../../../components/header/GeneralHeader";
import NotificationList from "../../../components/list/NotificationList";

const NotificationScreen = () => {
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
