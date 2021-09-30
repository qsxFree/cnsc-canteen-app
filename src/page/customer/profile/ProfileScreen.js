import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Avatar,
  Heading,
  Stack,
  VStack,
  Text,
  HStack,
  Divider,
  Button,
} from "native-base";
import React from "react";
import GeneralHeader from "../../../components/header/GeneralHeader";

const ProfileScreen = () => {
  return (
    <Stack>
      <GeneralHeader title="You" />
      <VStack m="4">
        <VStack space={3} alignItems="center" justifyContent="center">
          <Avatar bg="primary.800">RL</Avatar>
          <Heading>Ralph Royeen A. Lagumen</Heading>
        </VStack>
        <Divider w="full" my="10" />
        <VStack mx="16">
          <HStack justifyContent="space-between">
            <Text fontSize="md">User ID:</Text>
            <Text fontSize="md" bold>
              18-6969
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontSize="md">Balance:</Text>
            <Text fontSize="md" bold>
              500
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontSize="md">Phone:</Text>
            <Text fontSize="md" bold>
              (+63)092656698985
            </Text>
          </HStack>
          <Button
            my="16"
            variant="outline"
            borderColor="primary.800"
            _text={{ color: "primary.800" }}
            leftIcon={
              <MaterialCommunityIcons
                name="history"
                size={20}
                color="#820014"
              />
            }
          >
            View Transaction History
          </Button>
        </VStack>
      </VStack>
    </Stack>
  );
};

export default ProfileScreen;
