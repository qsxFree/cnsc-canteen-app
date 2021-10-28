import { MaterialIcons } from "@expo/vector-icons";
import { Button, Heading, Icon, Input, Link, VStack } from "native-base";
import React, { useContext, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { login } from "../api/authentication";
import { fetchCustomerProfile } from "../api/customer";
import UserContext from "../context/UserContext";
import Token from "../hooks/useToken";

const LoginScreen = ({ navigation }) => {
  const { setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const fetchCustomerInfo = useQuery("fetch-customer", fetchCustomerProfile, {
    onSuccess: (data) => {
      setUser(data.data);
      setLoading(false);
      navigation.navigate("Customer.Home");
    },
    onError: (err) => {
      console.log(err);
      setLoading(false);
    },
    refetchOnMount: false,
    refetchIntervalInBackground: true,
    refetchInterval: 5,
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  const _login = useMutation(login, {
    onError: (e, v, x) => {
      console.log(e);
      setLoading(false);
    },
    onSuccess: (e, v, x) => {
      Token.setToken(e.data.token)
        .then((value) => {
          fetchCustomerInfo.refetch();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });

  const handleLogin = () => {
    setLoading(true);
    //fetchCustomerInfo.refetch();
    _login.mutate({ username: usernameValue, password: passwordValue });
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
          onPress={handleLogin}
          bg="primary.800"
          isLoading={loading}
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
