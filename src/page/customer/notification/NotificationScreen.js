import { ScrollView, Stack } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import GeneralHeader from "../../../components/header/GeneralHeader";
import NotificationList from "../../../components/list/NotificationList";
import NotificationContext from "../../../context/NotificationContext";
import * as Notifications from "expo-notifications";
import { useQuery } from "react-query";
import { orderListQuery } from "../../../api/customer";

const NotificationScreen = ({ navigation }) => {
  const { setNotificationCount } = useContext(NotificationContext);
  const [notificationData, setNotificationData] = useState([]);

  const orderQuery = useQuery("fetch-order-list", orderListQuery, {
    onSuccess: (data) => {
      setNotificationData(data.data);
    },
    onError: (err) => console.error("Error on retrieving order list", err),
    enabled: false,
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      orderQuery.refetch();
      setNotificationCount(0);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Stack>
      <GeneralHeader title="Notification" />
      <ScrollView>
        <NotificationList data={notificationData} />
      </ScrollView>
    </Stack>
  );
};

export default NotificationScreen;
