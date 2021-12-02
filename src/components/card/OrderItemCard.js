import React from "react";
import {
  HStack,
  VStack,
  Box,
  Image,
  Heading,
  Text,
  AspectRatio,
  Pressable,
} from "native-base";

const OrderItemCard = ({ item, navigation }) => {
  const _handlePress = () => {
    navigation.navigate("Customer.Order.Rate", item);
  };

  return (
    <Pressable onPress={_handlePress}>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <HStack
            my="2"
            w="100%"
            rounded="8"
            bgColor="warmGray.100"
            shadow={isPressed ? 0 : 2}
            overflow="hidden"
            backgroundColor="white"
            justifyContent="space-between"
          >
            <VStack mx="4" justifyContent="center">
              <Heading size="sm">{item.product}</Heading>
              <Text>
                <Text bold>Price : </Text> Php {item.price}
              </Text>
              <Text>
                <Text bold>Quantity : </Text> {item.quantity}
              </Text>
            </VStack>
            <Box w="32%">
              <AspectRatio aspectRatio={16 / 11}>
                <Image
                  source={{
                    uri: item.img,
                  }}
                  alt="item"
                />
              </AspectRatio>
            </Box>
          </HStack>
        );
      }}
    </Pressable>
  );
};

export default OrderItemCard;
