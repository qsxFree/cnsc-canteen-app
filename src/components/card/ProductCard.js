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

const ProductCard = ({ data, navigation }) => {
  const { category } = data;
  let categoryColor = "muted";
  switch (category) {
    case "rice-meal":
      categoryColor = "orange";
      break;
    case "breakfast":
      categoryColor = "purple";
      break;
    case "lunch":
      categoryColor = "lightBlue";
      break;
    case "snack":
      categoryColor = "emerald";
      break;
  }

  const img = (
    <Image
      source={{
        uri: data.img,
      }}
      alt={`${data.name}`}
    />
  );

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Customer.DailyMenu.Item", {
          img: img,
        })
      }
    >
      <Box shadow="4" rounded="25" w="64" m="2" overflow="hidden">
        <Box>
          <AspectRatio ratio={16 / 11}>{img}</AspectRatio>
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
            <Badge colorScheme={categoryColor} variant="subtle" w="20">
              {category}
            </Badge>
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
    </Pressable>
  );
};

export default ProductCard;
