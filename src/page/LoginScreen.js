import { MaterialIcons } from "@expo/vector-icons";
import { Button, Heading, Icon, Input, Link, VStack } from "native-base";
import React from "react";

const LoginScreen = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Customer.Home");
  };

  return (
    <VStack h="100%" alignItems="center">
      <Heading my="20">CNSC Cafeteria App</Heading>
      <VStack w="100%" mt="20" space="5">
        <Input placeholder="User ID" mx="10" />
        <Input
          type="password"
          mx="10"
          placeholder="Password"
          InputRightElement={
            <Icon
              as={<MaterialIcons name="visibility-off" />}
              size={5}
              mr="2"
              color="muted.400"
            />
          }
        />
        <Button mx="10" onPress={handleLogin} bg="primary.800">
          Login
        </Button>
        <Link mx="10" _text={{ color: "primary.800" }}>
          Forgot password?
        </Link>
      </VStack>
    </VStack>
  );
};

export default LoginScreen;
