import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SettingScreen from "../page/customer/settings/SettingScreen";
import TransactionHistoryScreen from "../page/customer/settings/TransactionHistoryScreen";
import ChangeMobileNumber from "../page/customer/settings/ChangeMobileNumber";
import ChangePasswordScreen from "../page/customer/settings/ChangePasswordScreen";

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
      />
      <Stack.Screen
        name="Customer.Settings.ChangeMobile"
        component={ChangeMobileNumber}
        options={{
          title: "Change Mobile Number",
          gestureDirection: "horizontal",
        }}
      />
      <Stack.Screen
        name="Customer.Settings.ChangePassword"
        component={ChangePasswordScreen}
        options={{
          title: "Change Mobile Password",
          gestureDirection: "horizontal",
        }}
      />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
