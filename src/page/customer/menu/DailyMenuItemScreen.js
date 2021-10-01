import {
  Image,
  VStack,
  AspectRatio,
  ZStack,
  Box,
  Button,
  ArrowBackIcon,
  HStack,
  Text,
  CloseIcon,
} from "native-base";
import React from "react";
import { SharedElement } from "react-native-shared-element";

const DailyMenuItemScreen = ({ route, navigation }) => {
  const { img } = route.params;
  return (
    <Box>
      <ZStack>
        <Box w="full" height="full">
          <AspectRatio ratio={16 / 10}>{img}</AspectRatio>
        </Box>
        <Button
          ml="4"
          mt="4"
          rounded="full"
          shadow="5"
          bg="white"
          px="2"
          _pressed={{ opacity: 0.8, bg: "white" }}
          _hover={{ opacity: 0.8, bg: "white" }}
          onPress={() => navigation.goBack()}
        >
          <CloseIcon size="3" />
        </Button>
      </ZStack>
    </Box>
  );
};
``;
export default DailyMenuItemScreen;
