import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NotificationScreen from "./../page/customer/notification/NotificationScreen";
import OrderInformation from "../page/customer/notification/OrderInformation";
const Stack = createStackNavigator();

const OrderNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Customer.Order.Notification">
      <Stack.Screen
        name="Customer.Settings.Selection"
        component={NotificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Customer.Order.Information"
        component={OrderInformation}
        options={{
          title: "Order Information",
          gestureDirection: "vertical",
        }}
      />
    </Stack.Navigator>
  );
};

export default OrderNavigator;
