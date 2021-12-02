import { ScrollView, Spinner, Stack } from "native-base";
import React, { useContext, useEffect, useState } from "react";
import GeneralHeader from "../../../components/header/GeneralHeader";
import NotificationList from "../../../components/list/NotificationList";
import NotificationContext from "../../../context/NotificationContext";
import { useQuery } from "react-query";
import { orderListQuery } from "../../../api/customer";

const NotificationScreen = ({ navigation }) => {
  const { setNotificationCount } = useContext(NotificationContext);
  const [notificationData, setNotificationData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const orderQuery = useQuery("fetch-order-list", orderListQuery, {
    onSuccess: (data) => {
      setNotificationData(data.data);
    },
    onError: (err) => console.error("Error on retrieving order list", err),
    onSettled: () => setIsLoading(false),
    enabled: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setIsLoading(true);
      orderQuery.refetch();
      setNotificationCount(0);
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <Stack>
      <GeneralHeader title="Orders" />
      {isLoading ? (
        <Spinner color="primary.800" size="lg" />
      ) : (
        <NotificationList
          navigation={navigation}
          data={notificationData}
          notificationRefetch={orderQuery.refetch}
        />
      )}
    </Stack>
  );
};

export default NotificationScreen;
