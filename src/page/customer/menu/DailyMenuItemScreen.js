import {
  VStack,
  AspectRatio,
  Box,
  Button,
  Image,
  Text,
  CloseIcon,
  Heading,
  HStack,
  Divider,
} from "native-base";
import React from "react";
import MenuCategoryBadge from "../../../components/badge/MenuCategoryBadge";

const DailyMenuItemScreen = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <VStack>
      <Box>
        <Box w="full">
          <AspectRatio ratio={16 / 10}>
            <Image
              source={{
                uri: data.product.img,
              }}
              alt={`${data.product.name}`}
            />
          </AspectRatio>
          <Button
            ml="4"
            mt="4"
            rounded="full"
            shadow="5"
            bg="white"
            px="2"
            position="absolute"
            _pressed={{ opacity: 0.8, bg: "white" }}
            _hover={{ opacity: 0.8, bg: "white" }}
            onPress={() => navigation.goBack()}
          >
            <CloseIcon size="3" />
          </Button>
        </Box>
      </Box>
      <VStack mx="4">
        <Heading size="xl" my="4">
          {data.product.name}
        </Heading>
        <HStack alignItems="center">
          <Text fontSize="sm">Ratings : </Text>
          <Text fontSize="xl" bold>
            {data.rating}
          </Text>
          <Text fontSize="sm"> / 5.0</Text>
        </HStack>
        <HStack alignItems="center">
          <Text fontSize="sm">Category : </Text>
          <MenuCategoryBadge
            category={data.category.slug}
            label={data.category.name}
          />
        </HStack>
        <HStack alignItems="center">
          <Text fontSize="sm">Availability : </Text>
          <Text color={data.is_available ? "darkText" : `danger.600`} bold>
            {data.is_available ? `Available` : `Not Available`}
          </Text>
        </HStack>
        <Divider w="full" my="4" />
        <VStack>
          <Heading size="lg" mb="2">
            Php {data.product.price}
          </Heading>
        </VStack>
      </VStack>
    </VStack>
  );
};
``;
export default DailyMenuItemScreen;
