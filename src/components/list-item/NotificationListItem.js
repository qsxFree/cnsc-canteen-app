import { Button, Heading, HStack, Pressable, Text, VStack } from "native-base";
import React, { useState } from "react";
import moment from "moment";
import { useMutation, useQuery } from "react-query";
import { changeOrderStatusQuery } from "../../api/customer";

const NotificationListItem = ({ data }) => {
  let date = moment(data.date_ordered).add(1, "minute").format();
  const currentDate = moment().format();

  const [status, setStatus] = useState(data.status);

  const setOrderStatusQuery = useMutation(changeOrderStatusQuery, {
    onSuccess: (d, v, c) => {
      console.log("status updated");
    },
    onError: (e, v, c) => {
      console.error("Error on setting status", e);
    },
  });

  const _triggerStatus = (id, status) => {
    setOrderStatusQuery.mutate({ path: id, status: status });
  };

  let render = null;

  if (moment(date).isAfter(currentDate) && status === "PENDING") {
    render = (
      <HStack space={2}>
        <Button
          variant="ghost"
          size="sm"
          px="4"
          onPress={() => _triggerStatus(data.id, "REJECTED")}
        >
          Reject
        </Button>
        <Button
          bgColor="primary.800"
          size="sm"
          px="4"
          onPress={() => _triggerStatus(data.id, "RECEIVED")}
          isLoading={setOrderStatusQuery.isLoading}
        >
          Confirm
        </Button>
      </HStack>
    );
  } else if (moment(date).isSameOrBefore(currentDate) && status === "PENDING") {
    setOrderStatusQuery.mutate({ path: data.id, status: "EXPIRED" });
    render = (
      <Text color="muted.400" italic>
        EXPIRED
      </Text>
    );
  } else {
    render = (
      <Text color="muted.400" italic>
        {status}
      </Text>
    );
  }

  return (
    <Pressable>
      <VStack rounded="8" bgColor="warmGray.100" m="0.5" mx="4" shadow="1">
        <HStack m="2" mx="4" justifyContent="space-between">
          <Text fontSize="lg">Order</Text>
          <Text sub color="muted.400">
            {moment(data.date_ordered).calendar()}
          </Text>
        </HStack>
        <HStack mx="4" mb="2">
          <Text color="muted.500">Transaction ID: </Text>
          <Text bold> {data.id}</Text>
        </HStack>
        <HStack mx="4" mb="2" justifyContent="flex-end">
          {render}
        </HStack>
      </VStack>
    </Pressable>
  );
};

export default NotificationListItem;
