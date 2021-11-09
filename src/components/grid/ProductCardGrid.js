import React from "react";
import { Flex, Heading, ScrollView, Stack, VStack } from "native-base";
import ProductCard from "../card/ProductCard";

const ProductCardGrid = ({ title, navigation, data }) => {
  return (
    <VStack space="2.5">
      <Heading mx="4" size="md" mt="4">
        {title}
      </Heading>
      <ScrollView>
        <Stack
          direction="row"
          flexWrap="wrap"
          space={4}
          justifyContent="center"
          py="1.5"
        >
          {data.map((item) => (
            <ProductCard key={item.id} data={item} navigation={navigation} />
          ))}
        </Stack>
      </ScrollView>
    </VStack>
  );
};

export default ProductCardGrid;
