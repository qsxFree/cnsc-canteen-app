import { FlatList } from "native-base";
import React from "react";
import NotificationListItem from "../list-item/NotificationListItem";
import moment from "moment";
const NotificationList = ({ data, notificationRefetch }) => {
  const currentDate = moment().format();

  return (
    <FlatList
      marginBottom="20"
      scrollEnabled
      data={data}
      renderItem={({ item }) => (
        <NotificationListItem
          data={item}
          notificationRefetch={notificationRefetch}
          currentDate={currentDate}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default NotificationList;
