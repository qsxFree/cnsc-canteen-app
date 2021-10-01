import React from "react";
import { Divider, Flex, Heading, ScrollView, Stack, VStack } from "native-base";
import ProductCard from "../card/ProductCard";

const mockData = [
  {
    id: 1,
    name: "Kanin w/ rice",
    price: 50.0,
    category: "rice-meal",
    ratings: 4.2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra rhoncus dolor sit amet egestas. Etiam imperdiet bibendum leo a commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Morbi vehicula ut nunc in tincidunt. Donec sodales maximus velit, vitae iaculis lacus aliquam eget.",
    img: "https://images.pexels.com/photos/7538054/pexels-photo-7538054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    available: true,
  },
  {
    id: 2,
    name: "Kanin w/ rice",
    price: 50.0,
    category: "lunch",
    ratings: 4.2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra rhoncus dolor sit amet egestas. Etiam imperdiet bibendum leo a commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Morbi vehicula ut nunc in tincidunt. Donec sodales maximus velit, vitae iaculis lacus aliquam eget.",
    img: "https://images.pexels.com/photos/7538054/pexels-photo-7538054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    available: true,
  },
  {
    id: 3,
    name: "Kanin w/ rice",
    category: "breakfast",
    price: 50.2,
    ratings: 4.2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra rhoncus dolor sit amet egestas. Etiam imperdiet bibendum leo a commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Morbi vehicula ut nunc in tincidunt. Donec sodales maximus velit, vitae iaculis lacus aliquam eget.",
    img: "https://res.cloudinary.com/djangocloud/image/upload/v1/canteen_media/img/2021/09/27/Pork-Adobo--500x375_gh9ydl",
    available: true,
  },
  {
    id: 4,
    name: "Kanin w/ rice",
    price: 50.0,
    category: "snack",
    ratings: 4.2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra rhoncus dolor sit amet egestas. Etiam imperdiet bibendum leo a commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Morbi vehicula ut nunc in tincidunt. Donec sodales maximus velit, vitae iaculis lacus aliquam eget.",
    img: "https://images.pexels.com/photos/7538054/pexels-photo-7538054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    available: false,
  },
];

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
