import { MaterialIcons } from "@expo/vector-icons";
import { Button, Heading, Icon, Input, Link, VStack } from "native-base";
import React, { useContext, useState } from "react";
import { useMutation } from "react-query";
import { loginBridge } from "../api/authentication";
import TokenContext from "../context/TokenContext";
import TokenStore from "../hooks/useToken";

const LoginScreen = ({ navigation }) => {
  const { setToken } = useContext(TokenContext);
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const loginMutation = useMutation(loginBridge, {
    onError: (e, v, c) => {
      console.error("Can't Login", e);
    },
    onSuccess: (d, v, c) => {
      TokenStore.setToken(d.data.token).then(() => {
        setToken(d.data.token);
        navigation.navigate("Customer.Home");
      });
    },
  });

  const _login = () => {
    loginMutation.mutate({ username: usernameValue, password: passwordValue });
  };

  return (
    <VStack h="100%" alignItems="center">
      <Heading my="20">CNSC Cafeteria App</Heading>
      <VStack w="100%" mt="20" space="5">
        <Input
          placeholder="User ID"
          mx="10"
          value={usernameValue}
          onChangeText={(e) => {
            setUsernameValue(e);
          }}
        />
        <Input
          type="password"
          mx="10"
          placeholder="Password"
          value={passwordValue}
          onChangeText={(e) => {
            setPasswordValue(e);
          }}
          InputRightElement={
            <Icon
              as={<MaterialIcons name="visibility-off" />}
              size={5}
              mr="2"
              color="muted.400"
            />
          }
        />
        <Button
          mx="10"
          onPress={_login}
          bg="primary.800"
          isLoading={loginMutation.isLoading}
          isLoadingText="Please wait..."
        >
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
