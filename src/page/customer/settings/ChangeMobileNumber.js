import {
  VStack,
  Text,
  Input,
  InputGroup,
  InputLeftAddon,
  FormControl,
  Center,
  Button,
  useToast,
} from "native-base";
import React, { useState, useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { customerProfileQuery, editProfile } from "../../../api/customer";

const ChangeMobileNumber = ({ navigation }) => {
  const toast = useToast();
  const [mobileNumber, setMobileNumber] = useState("");
  const [currentMobileNumber, setCurrentMobileNUmber] = useState("");
  const [user, setUser] = useState(null);
  const [invalidNumber, setInvalidNumber] = useState(false);

  const customerQuery = useQuery("fetch-profile", customerProfileQuery, {
    onError: (err) => {
      console.error("Error on mobile number", err);
      toast.show({ description: "Error on mobile number" });
    },
    onSuccess: (data) => {
      setUser(data.data);
      setCurrentMobileNUmber(data.data.phone_num.substring(3));
    },
    enabled: false,
  });

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      customerQuery.refetch();
    });
    return unsubscribe;
  }, [navigation]);

  const editProfileMutation = useMutation(editProfile, {
    onError: (err) => {
      console.error("Error on edit profile", err);
      toast.show({ description: "Error on edit profile" });
    },
    onSuccess: (data) => {
      navigation.goBack();
      toast.show({ description: data.data.detail });
    },
  });

  const handleChangeText = (text) => {
    let startText = text.substring(0, 1);
    if (
      !isNaN(text) &&
      text.length >= 10 &&
      text.length <= 12 &&
      (startText === "0" || startText === "9")
    ) {
      setInvalidNumber(false);
    } else {
      setInvalidNumber(true);
    }
    setMobileNumber(text);
  };

  const handleSubmit = () => {
    editProfileMutation.mutate({
      ...user,
      phone_num:
        !mobileNumber.charAt(0) === "0"
          ? mobileNumber
          : mobileNumber.substring(1),
    });
  };

  return (
    <VStack alignItems="center" justifyContent="center" height="70%">
      <Center>
        <FormControl mt="12">
          <FormControl.Label>Current Mobile Number</FormControl.Label>
          <InputGroup width="100%">
            <InputLeftAddon children={" +63  "} />
            <Input
              keyboardType="numeric"
              value={currentMobileNumber}
              editable={false}
              isDisabled={true}
              width="70%"
            />
          </InputGroup>
        </FormControl>
        <FormControl mt="12" isInvalid={invalidNumber}>
          <FormControl.Label>New Mobile Number</FormControl.Label>
          <InputGroup width="100%">
            <InputLeftAddon children={" +63  "} />
            <Input
              value={mobileNumber}
              onChangeText={handleChangeText}
              keyboardType="numeric"
              placeholder="Enter New Mobile Number"
              width="70%"
            />
          </InputGroup>
          <FormControl.ErrorMessage>
            Invalid phone number.
          </FormControl.ErrorMessage>
        </FormControl>
        <Button
          mt="12"
          bgColor="primary.800"
          px="40"
          onPress={handleSubmit}
          isLoading={editProfileMutation.isLoading}
        >
          Save
        </Button>
      </Center>
    </VStack>
  );
};

export default ChangeMobileNumber;
