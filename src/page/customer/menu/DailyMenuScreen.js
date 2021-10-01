import {
  Button,
  Input,
  ScrollView,
  SearchIcon,
  Spinner,
  Stack,
} from "native-base";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { fetchMenuList } from "../../../api/customer";
import DailyMenuButtonGroup from "../../../components/button-group/DailyMenuButtonGroup";
import ProductCardGrid from "../../../components/grid/ProductCardGrid";
import GeneralHeader from "../../../components/header/GeneralHeader";

const DailyMenuScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const fetchMenu = useQuery("fetch-menu", fetchMenuList, {
    onSuccess: (res) => {
      console.log(res.data);
      setData(res.data);
    },

    onError: (err) => console.err(err),
  });
  return (
    <>
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
      </Stack>
      {!fetchMenu.isLoading ? (
        <ScrollView>
          <ProductCardGrid
            data={data}
            title="Available"
            navigation={navigation}
          />
          <ProductCardGrid data={data} title="Others" navigation={navigation} />
        </ScrollView>
      ) : (
        <Spinner color="primary.800" size="lg" />
      )}
    </>
  );
};

export default DailyMenuScreen;
