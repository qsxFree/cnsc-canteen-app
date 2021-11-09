import { FlatList, VStack } from "native-base";
import React from "react";
import SettingsListItem from "../list-item/SettingsListItem";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const settingsData = [
  {
    id: 5,
    title: "Transaction History.",
    icon: <MaterialIcons name="history" />,
  },
  {
    id: 4,
    title: "Change Mobile No.",
    icon: <AntDesign name="mobile1" />,
  },
  {
    id: 1,
    title: "Change Password",
    icon: <MaterialCommunityIcons name="form-textbox-password" />,
  },
  {
    id: 2,
    title: "Change PIN",
    icon: <Ionicons name="md-keypad-outline" />,
  },
  {
    id: 3,
    title: "Sign out",
    icon: <MaterialIcons name="logout" />,
  },
];

const SettingList = ({ navigation }) => {
  return (
    <FlatList
      data={settingsData}
      renderItem={({ item }) => {
        item = { ...item, navigation: navigation };
        return <SettingsListItem data={item} />;
      }}
      keyExtractor={(item) => item.id}
    />
  );
};

export default SettingList;
