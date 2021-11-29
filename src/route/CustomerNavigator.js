import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useContext } from "react";
import NotificationScreen from "../page/customer/notification/NotificationScreen";
import ProfileScreen from "../page/customer/profile/ProfileScreen";
import SettingScreen from "../page/customer/settings/SettingScreen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DailyMenuNavigator from "./DailyMenuNavigator";
import SettingNavigator from "./SettingNavigator";
import token from "./../hooks/useToken";
import NotificationContext from "../context/NotificationContext";
import ProfileNavigator from "./ProfileNavigator";

const Tab = createBottomTabNavigator();
const CustomerNavigator = ({ navigation }) => {
  const { notificationCount } = useContext(NotificationContext);
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
        tabBarHideOnKeyboard: true,
        tabBarAllowFontScaling: true,
        tabBarShowLabel: false,
        tabBarStyle: { height: 55 },
        tabBarActiveTintColor: "#820014",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Customer.DailyMenu"
        component={DailyMenuNavigator}
        options={{
          title: "Menu",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Customer.Profile"
        component={ProfileNavigator}
        options={{ title: "Profile", headerShown: false }}
      />
      <Tab.Screen
        name="Customer.Notification"
        component={NotificationScreen}
        options={{
          title: "Notification",
          headerShown: false,
          tabBarBadge: notificationCount === 0 ? null : notificationCount,
        }}
      />
      <Tab.Screen
        name="Customer.Settings"
        component={SettingNavigator}
        options={{ title: "Settings", headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default CustomerNavigator;
