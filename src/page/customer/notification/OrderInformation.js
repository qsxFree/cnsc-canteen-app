import {
  VStack,
  Text,
  HStack,
  AspectRatio,
  Image,
  Box,
  Spacer,
  Divider,
  Heading,
  ScrollView,
  FlatList,
} from "native-base";
import React from "react";
import moment from "moment";
import OrderItemCard from "../../../components/card/OrderItemCard";

const OrderInformation = ({ route, navigation }) => {
  const data = route.params;
  console.log(data);
  //TODO : get order information from route.params
  return (
    <VStack justifyContent="space-between">
      <VStack width="100%" mx="4" my="1" mt="6">
        <Text fontSize="md">
          <Text fontSize="md" bold>
            Transaction ID :{" "}
          </Text>
          {data.id}
        </Text>
        <Text fontSize="md">
          <Text fontSize="md" bold>
            Date :{" "}
          </Text>
          {moment(data.date_ordered).calendar()}
        </Text>
        <Text fontSize="md">
          <Text fontSize="md" bold>
            Status :{" "}
          </Text>
          {data.status}
        </Text>
      </VStack>
      <Divider w="full" my="4" />
      <VStack mx="4" my="1">
        <Text fontSize="md" bold>
          Items
        </Text>
        <Divider my="2" />
        <FlatList
          scrollEnabled
          height={300}
          data={data.items}
          renderItem={({ item }) => (
            <OrderItemCard item={item} navigation={navigation} />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </VStack>
      <Divider w="full" my="4" />
      <VStack mx="4">
        <Text>
          TOTAL :{" "}
          <Text fontSize="lg" color="primary.800" bold>
            Php {data.total_price}
          </Text>
        </Text>
      </VStack>
    </VStack>
  );
};

export default OrderInformation;
