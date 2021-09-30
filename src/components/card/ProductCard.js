import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
  VStack,
} from "native-base";
import React from "react";

const ProductCard = ({ data }) => {
  return (
    <Box shadow="4" rounded="25" w="64" m="2" overflow="hidden">
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
        <Heading size="md" my="2" color="primary.800">
          {data.name}
        </Heading>
        <Text bold>
          {data.ratings}
          <Text sub> / 5.0</Text>
        </Text>
        <HStack alignSelf="flex-end">
          <Text sub>PHP </Text>
          <Text bold fontSize="2xl">
            {data.price}
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default ProductCard;
