import {
  AspectRatio,
  Badge,
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import MenuCategoryBadge from "../badge/MenuCategoryBadge";

const ProductCard = ({ data, navigation }) => {
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Customer.DailyMenu.Item", {
          data: data,
        })
      }
    >
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <Box
            shadow={isPressed ? "0" : "4"}
            rounded="25"
            w="64"
            m="2"
            overflow="hidden"
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}
          >
            <Box>
              <AspectRatio ratio={16 / 11}>
                <Image
                  source={{
                    uri: data.img,
                  }}
                  alt={`${data.name}`}
                />
              </AspectRatio>
            </Box>
            <VStack w="100%" bgColor="warmGray.50" pb="4" px="4">
              <Heading size="md" my="2" color="primary.800" isTruncated>
                {data.name}
              </Heading>

              <HStack my="1" justifyContent="space-between" alignItems="center">
                <Text bold>
                  {data.ratings}
                  <Text sub> / 5.0</Text>
                </Text>
                <MenuCategoryBadge
                  category={data.category}
                  label={data.category}
                />
              </HStack>

              <Text color={data.available ? "darkText" : `danger.600`}>
                {data.available ? `Available` : `Not Available`}
              </Text>

              <Divider my="2" w="full" />
              <HStack alignSelf="flex-end">
                <Text sub>PHP </Text>
                <Text bold fontSize="2xl">
                  {data.price}
                </Text>
              </HStack>
            </VStack>
          </Box>
        );
      }}
    </Pressable>
  );
};

export default ProductCard;
