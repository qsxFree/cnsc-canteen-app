import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import DailyMenuItemScreen from "../page/customer/menu/DailyMenuItemScreen";
import DailyMenuScreen from "../page/customer/menu/DailyMenuScreen";

const Stack = createStackNavigator();
const DailyMenuNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Customer.DailyMenu.Selection">
      <Stack.Screen
        name="Customer.DailyMenu.Selection"
        component={DailyMenuScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Customer.DailyMenu.Item"
        component={DailyMenuItemScreen}
        options={{
          headerShown: false,
          title: "Daily Menu Item",
          gestureDirection: "horizontal",
        }}
      />
    </Stack.Navigator>
  );
};

export default DailyMenuNavigator;
