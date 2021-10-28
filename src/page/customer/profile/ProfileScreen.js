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
import React, { useContext } from "react";
import GeneralHeader from "../../../components/header/GeneralHeader";
import UserContext from "../../../context/UserContext";

const ProfileScreen = () => {
  const { user } = useContext(UserContext);
  return (
    <Stack>
      <GeneralHeader title="You" />
      <VStack m="4">
        <VStack space={3} alignItems="center" justifyContent="center">
          <Avatar bg="primary.800">{`${user.user_info.first_name.charAt(
            0
          )}${user.user_info.last_name.charAt(0)}`}</Avatar>
          <Heading>{`${user.user_info.first_name} ${user.user_info.last_name}`}</Heading>
        </VStack>
        <Divider w="full" my="10" />
        <VStack mx="16">
          <HStack justifyContent="space-between">
            <Text fontSize="md">User ID:</Text>
            <Text fontSize="md" bold>
              {user.user_info.username}
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontSize="md">Balance:</Text>
            <Text fontSize="md" bold>
              {user.current_balance}
            </Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontSize="md">Phone:</Text>
            <Text fontSize="md" bold>
              {user.phone_num}
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
