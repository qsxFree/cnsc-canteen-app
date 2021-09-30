import { Stack } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import GeneralHeader from "../../../components/header/GeneralHeader";

const SettingScreen = () => {
  return (
    <Stack>
      <GeneralHeader title="Settings" />
    </Stack>
  );
};

export default SettingScreen;
