import { FlatList } from "native-base";
import React from "react";
import NotificationListItem from "../list-item/NotificationListItem";

const mockData = [
  {
    transactionId: 956532,
    title: "Order confirmation",
    expired: true,
  },
  {
    transactionId: 123457,
    title: "Order confirmation",
    expired: false,
  },
  {
    transactionId: 123458,
    title: "Order confirmation",
    expired: false,
  },
  {
    transactionId: 123458,
    title: "Order confirmation",
    expired: false,
  },
  {
    transactionId: 123458,
    title: "Order confirmation",
    expired: false,
  },
  {
    transactionId: 123458,
    title: "Order confirmation",
    expired: false,
  },
  {
    transactionId: 123458,
    title: "Order confirmation",
    expired: false,
  },
  {
    transactionId: 123458,
    title: "Order confirmation",
    expired: false,
  },
  {
    transactionId: 123458,
    title: "Order confirmation",
    expired: false,
  },
  {
    transactionId: 123458,
    title: "Order confirmation",
    expired: false,
  },
  {
    transactionId: 123458,
    title: "Order confirmation",
    expired: false,
  },
  {
    transactionId: 123458,
    title: "Order confirmation",
    expired: false,
  },
  {
    transactionId: 123458,
    title: "Order confirmation",
    expired: false,
  },
];

const NotificationList = () => {
  return (
    <FlatList
      data={mockData}
      renderItem={({ item }) => <NotificationListItem data={item} />}
      keyExtractor={(item) => item.transactionId}
    />
  );
};

export default NotificationList;
