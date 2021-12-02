import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "native-base";
import React, { useContext, useState } from "react";
import LoginScreen from "../page/LoginScreen";
import CustomerNavigator from "./CustomerNavigator";
import { navigatorTheme } from "../../theme";
import TokenStore from "../hooks/useToken";

const Stack = createNativeStackNavigator();
const Screen = Stack.Screen;
const Navigator = Stack.Navigator;

const RouteConfig = () => {
  const [token, setToken] = useState("");
  TokenStore.getToken()
    .then((result) => {
      setToken(result);
    })
    .catch((error) => {
      setToken("");
    });
  console.log("RouteConfig", token);
  return (
    <NavigationContainer theme={navigatorTheme}>
      <Navigator
        initialRouteName={"Customer.Login"}
        screenOptions={{ statusBarStyle: "dark" }}
      >
        <Screen
          name="Customer.Login"
          component={LoginScreen}
          options={{
            title: "Login",
            headerBackVisible: false,

            // headerRight: () => (
            //   <Button
            //     variant="outline"
            //     size="xs"
            //     px="4"
            //     borderColor="primary.800"
            //     _text={{ color: "primary.800" }}
            //   >
            //     Admin
            //   </Button>
            // ),
          }}
        />
        <Screen
          name="Customer.Home"
          component={CustomerNavigator}
          options={{ title: "Home", headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default RouteConfig;
