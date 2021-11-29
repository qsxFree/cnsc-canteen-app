import { FlatList } from "native-base";
import React from "react";
import TransactionListItem from "../list-item/TransactionListItem";

const TransactionList = ({ data }) => {
  return (
    <FlatList
      scrollEnabled
      data={data}
      renderItem={({ item }) => <TransactionListItem data={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default TransactionList;
