import {
  Button,
  Input,
  ScrollView,
  SearchIcon,
  Spinner,
  Stack,
} from "native-base";
import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { menuListQuery } from "../../../api/customer";
import DailyMenuButtonGroup from "../../../components/button-group/DailyMenuButtonGroup";
import ProductCardGrid from "../../../components/grid/ProductCardGrid";
import GeneralHeader from "../../../components/header/GeneralHeader";

const DailyMenuScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const menuQuery = useQuery("fetch-menu", menuListQuery, {
    onSuccess: (res) => {
      setData(res.data);
    },
    onError: () => console.log("Error on fetching daily menu"),
    enabled: false,
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      menuQuery.refetch();
    });
    return unsubscribe;
  }, [navigation]);

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
      {!menuQuery.isLoading ? (
        <ProductCardGrid
          data={data}
          title="Available"
          navigation={navigation}
        />
      ) : (
        <Spinner color="primary.800" size="lg" />
      )}
    </>
  );
};

export default DailyMenuScreen;
