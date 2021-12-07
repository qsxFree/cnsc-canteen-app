import React from "react";
import { Flex, Heading, ScrollView, Stack, VStack, Center } from "native-base";
import ProductCard from "../card/ProductCard";

const ProductCardGrid = ({ title, navigation, data }) => {
  return (
    <>
      <Heading mx="4" size="md" my="4">
        {title}
      </Heading>
      <ScrollView width="100%">
        <Stack
          direction="row"
          flexWrap="wrap"
          space={2}
          justifyContent="center"
        >
          {data.map((item) => (
            <ProductCard key={item.id} data={item} navigation={navigation} />
          ))}
        </Stack>
      </ScrollView>
    </>
  );
};

export default ProductCardGrid;
