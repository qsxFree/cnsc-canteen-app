import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import DailyMenuScreen from "../page/customer/menu/DailyMenuScreen";
import NotificationScreen from "../page/customer/notification/NotificationScreen";
import ProfileScreen from "../page/customer/profile/ProfileScreen";
import SettingScreen from "../page/customer/settings/SettingScreen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const CustomerNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Customer.DailyMenu"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          switch (route.name) {
            case "Customer.DailyMenu":
              icon = (
                <Ionicons name="fast-food-outline" size={size} color={color} />
              );
              break;
            case "Customer.Profile":
              icon = <AntDesign name="user" size={size} color={color} />;
              break;
            case "Customer.Notification":
              icon = (
                <Ionicons
                  name="notifications-outline"
                  size={size}
                  color={color}
                />
              );
              break;
            case "Customer.Settings":
              icon = <AntDesign name="setting" size={size} color={color} />;
              break;
            default:
              icon = <AntDesign name="upcircleo" size={size} color={color} />;
          }

          return icon;
        },
        tabBarActiveTintColor: "#820014",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Customer.DailyMenu"
        component={DailyMenuScreen}
        options={{
          title: "Daily Menu",
        }}
      />
      <Tab.Screen
        name="Customer.Profile"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      <Tab.Screen
        name="Customer.Notification"
        component={NotificationScreen}
        options={{ title: "Notification" }}
      />
      <Tab.Screen
        name="Customer.Settings"
        component={SettingScreen}
        options={{ title: "Settings" }}
      />
    </Tab.Navigator>
  );
};

export default CustomerNavigator;
