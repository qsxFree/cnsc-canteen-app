import { Stack } from "native-base";
import React from "react";
import GeneralHeader from "../../../components/header/GeneralHeader";
import SettingList from "../../../components/list/SettingList";

const SettingScreen = ({ navigation }) => {
  return (
    <Stack>
      <GeneralHeader title="Settings" />
      <SettingList navigation={navigation} />
    </Stack>
  );
};

export default SettingScreen;
