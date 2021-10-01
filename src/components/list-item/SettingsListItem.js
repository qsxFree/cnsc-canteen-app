import { Heading, HStack, Icon, Pressable, VStack } from "native-base";
import React from "react";
import { View, Text } from "react-native";

const SettingsListItem = (data) => {
  return (
    <Pressable>
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
            <Heading size="sm">{data.data.title}</Heading>
            <Icon as={data.data.icon} color="gray.600" />
          </HStack>
        );
      }}
    </Pressable>
  );
};

export default SettingsListItem;
