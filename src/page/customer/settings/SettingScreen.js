import { Stack } from "native-base";
import React from "react";
import GeneralHeader from "../../../components/header/GeneralHeader";
import SettingList from "../../../components/list/SettingList";

const SettingScreen = () => {
  return (
    <Stack>
      <GeneralHeader title="Settings" />
      <SettingList />
    </Stack>
  );
};

export default SettingScreen;
