import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "native-base";
import React, { useState } from "react";
import LoginScreen from "../page/LoginScreen";
import CustomerNavigator from "./CustomerNavigator";
import { navigatorTheme } from "../../theme";
import { useQuery } from "react-query";
import { fetchCustomerProfile } from "../api/customer";
import { UserProvider } from "../context/UserContext";

const Stack = createNativeStackNavigator();
const Screen = Stack.Screen;
const Navigator = Stack.Navigator;

const RouteConfig = () => {
  const [auth, setAuth] = useState(true);
  const [user, setUser] = useState(null);
  const fetchCustomerInfo = useQuery("fetch-customer", fetchCustomerProfile, {
    onSuccess: (data) => setUser(data.data),
    onError: (err) => console.log(err),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <UserProvider value={user}>
      <NavigationContainer theme={navigatorTheme}>
        <Navigator
          initialRouteName="Customer.Login"
          screenOptions={{ statusBarStyle: "dark" }}
        >
          {user === null ? (
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
    </UserProvider>
  );
};

export default RouteConfig;
