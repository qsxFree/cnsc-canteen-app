import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../page/customer/profile/ProfileScreen";
import TransactionHistoryScreen from "../page/customer/settings/TransactionHistoryScreen";
const Stack = createStackNavigator();
const ProfileNavigator = () => {
  return (
    <Stack.Navigator initialRoute="Customer.Profile.Selection">
      <Stack.Screen
        name="Customer.Settings.Selection"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Customer.Profile.Transaction"
        component={TransactionHistoryScreen}
        options={{
          title: "Transaction History",
          gestureDirection: "horizontal",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
