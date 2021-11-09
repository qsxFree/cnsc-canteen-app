import { FlatList } from "native-base";
import React from "react";
import NotificationListItem from "../list-item/NotificationListItem";

const NotificationList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <NotificationListItem data={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default NotificationList;
