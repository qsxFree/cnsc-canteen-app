import {
  Box,
  Button,
  HStack,
  Input,
  ScrollView,
  SearchIcon,
  Stack,
} from "native-base";
import React from "react";
import DailyMenuButtonGroup from "../../../components/button-group/DailyMenuButtonGroup";
import ProductCardGrid from "../../../components/grid/ProductCardGrid";
import GeneralHeader from "../../../components/header/GeneralHeader";

const DailyMenuScreen = ({ navigation }) => {
  return (
    <Stack w="full">
      <GeneralHeader title="Daily Menu" />
      <Input
        type="search"
        variant="rounded"
        py="1"
        px="4"
        _focus={{ borderColor: "primary.800" }}
        placeholder="Search"
        size="xs"
        mx="4"
        InputRightElement={
          <Button
            bgColor="transparent"
            rightIcon={<SearchIcon size="xs" color="muted.500" />}
          ></Button>
        }
      />
      <DailyMenuButtonGroup />
      <ScrollView>
        <ProductCardGrid title="Available" navigation={navigation} />
        <ProductCardGrid title="Others" navigation={navigation} />
        <Box height="200"></Box>
      </ScrollView>
    </Stack>
  );
};

export default DailyMenuScreen;
