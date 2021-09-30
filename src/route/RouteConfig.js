import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "native-base";
import React, { useState } from "react";
import LoginScreen from "../page/LoginScreen";
import CustomerNavigator from "./CustomerNavigator";
import { navigatorTheme } from "../../theme";
import {
  authenticateCustomer,
  isCustomerAuthenticated,
} from "../service/authenticator";

const Stack = createNativeStackNavigator();
const Screen = Stack.Screen;
const Navigator = Stack.Navigator;

const RouteConfig = () => {
  const [auth, setAuth] = useState(false);
  authenticateCustomer().then((e) =>
    isCustomerAuthenticated().then((val) => setAuth(val))
  );

  return (
    <NavigationContainer theme={navigatorTheme}>
      <Navigator initialRouteName="Customer.Login">
        {!auth ? (
          <Screen
            name="Customer.Login"
            component={LoginScreen}
            options={{
              title: "Customer Login",

              headerRight: () => (
                <Button
                  variant="outline"
                  size="xs"
                  px="4"
                  borderColor="primary.800"
                  _text={{ color: "primary.800" }}
                >
                  Admin
                </Button>
              ),
            }}
          />
        ) : (
          <Screen
            name="Customer.Home"
            component={CustomerNavigator}
            options={{ title: "Home", headerShown: false }}
          />
        )}
      </Navigator>
    </NavigationContainer>
  );
};

export default RouteConfig;
