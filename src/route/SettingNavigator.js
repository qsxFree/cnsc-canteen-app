import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../page/customer/settings/SettingScreen";
import TransactionHistoryScreen from "../page/customer/settings/TransactionHistoryScreen";

const Stack = createStackNavigator();
const SettingNavigator = () => {
  return (
    <Stack.Navigator initialRoute="Customer.Settings.Selection">
      <Stack.Screen
        name="Customer.Settings.Selection"
        component={SettingScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Customer.Settings.Transaction"
        component={TransactionHistoryScreen}
        options={{
          title: "Transaction History",
          gestureDirection: "horizontal",
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default SettingNavigator;
