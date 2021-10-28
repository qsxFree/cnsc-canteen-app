import React from "react";
import { Flex, Heading, ScrollView, VStack } from "native-base";
import ProductCard from "../card/ProductCard";

const ProductCardGrid = ({ title, navigation, data }) => {
  return (
    <VStack space="2.5">
      <Heading mx="4" size="md" mt="4">
        {title}
      </Heading>
      <ScrollView px="4" horizontal>
        <Flex direction="row">
          {data.map((item) => (
            <ProductCard key={item.id} data={item} navigation={navigation} />
          ))}
        </Flex>
      </ScrollView>
    </VStack>
  );
};

export default ProductCardGrid;
