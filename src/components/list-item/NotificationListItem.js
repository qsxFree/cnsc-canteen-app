import { Button, Heading, HStack, Pressable, Text, VStack } from "native-base";
import React from "react";
import moment from "moment";

const NotificationListItem = ({ data }) => {
  let date = moment(data.date_ordered).add(1, "minute").format();
  const currentDate = moment().format();

  let toBeRendered = null;

  if (moment(date).isAfter(currentDate) && data.status === "PENDING") {
    toBeRendered = (
      <Button bgColor="primary.800" size="sm" px="4">
        Confirm
      </Button>
    );
  } else if (
    moment(date).isSameOrBefore(currentDate) &&
    data.status === "PENDING"
  ) {
    toBeRendered = (
      <Text color="muted.400" italic>
        Expired
      </Text>
    );
  } else {
    toBeRendered = (
      <Text color="muted.400" italic>
        {data.status}
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
          {toBeRendered}
        </HStack>
      </VStack>
    </Pressable>
  );
};

export default NotificationListItem;
