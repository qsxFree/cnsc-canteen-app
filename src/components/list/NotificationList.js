import { FlatList } from "native-base";
import React from "react";
import NotificationListItem from "../list-item/NotificationListItem";

const NotificationList = ({ data }) => {
  return (
    <FlatList
      marginBottom="20"
      scrollEnabled
      data={data}
      renderItem={({ item }) => <NotificationListItem data={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default NotificationList;
