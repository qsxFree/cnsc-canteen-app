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
  Center,
  useToast,
} from "native-base";
import { Rating } from "react-native-ratings";
import React from "react";
import { useMutation } from "react-query";
import { changeRatings } from "../../../api/customer";

const RateProductScreen = ({ route, navigation }) => {
  const data = route.params;
  const [rate, setRate] = React.useState(0);
  const toast = useToast();

  const ratingQuery = useMutation(changeRatings, {
    onSuccess: (d, v, c) => {
      toast.show({
        description: "Thank you for your feedback",
        duration: 2000,
      });
      navigation.goBack();
    },
    onError: (e, v, c) => {
      console.log(e);
      toast.show({
        description: "Something went wrong",
        duration: 2000,
      });
    },
  });

  const _handleSubmit = () => {
    ratingQuery.mutate({
      slug: data.slug,
      rating: rate,
    });
  };

  return (
    <VStack>
      <Box>
        <Box w="full">
          <AspectRatio ratio={16 / 10}>
            <Image
              source={{
                uri: data.img,
              }}
              alt={`${data.product}`}
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
        <Heading size="xl" mt="4">
          {data.product}
        </Heading>
        <Divider w="full" my="4" />
        <VStack>
          <Heading size="lg" mb="2">
            Php {data.price}
          </Heading>
        </VStack>
      </VStack>
      <Rating
        style={{ backgroundColor: "none" }}
        showRating
        startingValue={rate}
        onFinishRating={(rate) => {
          setRate(rate);
          console.log(rate);
        }}
      />
      <Center mt="4">
        <Button
          bg="primary.800"
          onPress={_handleSubmit}
          isLoading={ratingQuery.isLoading}
        >
          Save Ratings
        </Button>
      </Center>
    </VStack>
  );
};

export default RateProductScreen;
