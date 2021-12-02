import { Heading, HStack, Icon, Pressable, VStack } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import Token from "../../hooks/useToken";

const SettingsListItem = ({ data, navigation }) => {
  let handler = () => {};
  if (data.id === 0) {
    handler = () => {
      navigation.navigate("Customer.Settings.Transaction");
    };
  }else if (data.id === 1) {
    handler = () => {
      navigation.navigate("Customer.Settings.ChangeMobile");
    };
  }
   else if (data.id === 3) {
    handler = () => {
      Token.deleteToken()
        .then((val) => {
          navigation.navigate("Customer.Login");
        })
        .catch((err) => {
          console.log("Error on deleting token");
        });
    };
  }
  return (
    <Pressable onPress={handler}>
      {({ isHovered, isFocused, isPressed }) => {
        return (
          <HStack
            rounded="8"
            bgColor="warmGray.100"
            m="1"
            mx="4"
            shadow="1"
            p="4"
            bg={isPressed ? "warmGray.200" : "warmGray.100"}
            justifyContent="space-between"
          >
            <Heading size="sm">{data.title}</Heading>
            <Icon as={data.icon} color="gray.600" />
          </HStack>
        );
      }}
    </Pressable>
  );
};

export default SettingsListItem;
