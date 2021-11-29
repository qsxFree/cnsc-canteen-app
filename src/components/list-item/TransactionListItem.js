import { HStack, Heading, Icon, VStack, Text } from "native-base";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";

const TransactionListItem = ({ data }) => {
  const cashierType = data.cashier.split("-")[0];
  let subText = null;
  if (data.is_deduct && cashierType === "CCASH") {
    subText = (
      <Text sub color="error.700">
        Order Deduction
      </Text>
    );
  } else if (data.is_deduct && cashierType === "SCASH") {
    subText = (
      <Text sub color="error.700">
        Withdrawal
      </Text>
    );
  } else {
    subText = (
      <Text sub color="success.700">
        Deposit
      </Text>
    );
  }

  return (
    <HStack
      rounded="8"
      bgColor="warmGray.100"
      m="1"
      mx="4"
      shadow="1"
      p="2"
      justifyContent="space-between"
      alignItems="center"
    >
      <VStack alignItems="flex-start">
        <Icon
          as={
            data.is_deduct ? (
              <MaterialCommunityIcons name="cash-minus" />
            ) : (
              <MaterialCommunityIcons name="cash-plus" />
            )
          }
          color={data.is_deduct ? "error.700" : "tertiary.700"}
        />
        {subText}
      </VStack>
      <VStack alignItems="flex-end">
        <Heading size="sm">Php {data.amount}</Heading>
        <Text sub color="muted.400">
          {moment(data.date_transac).calendar()}
        </Text>
      </VStack>
    </HStack>
  );
};

export default TransactionListItem;
