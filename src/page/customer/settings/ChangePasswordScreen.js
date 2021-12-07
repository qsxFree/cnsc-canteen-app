import {
  Center,
  FormControl,
  useToast,
  VStack,
  Input,
  InputGroup,
  InputLeftAddon,
  WarningOutlineIcon,
  Button,
} from "native-base";
import React from "react";
import { useMutation } from "react-query";
import { changePassword } from "../../../api/customer";

const ChangePasswordScreen = ({ navigation }) => {
  const toast = useToast();
  const [oldPassword, setOldPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const [invalidConfirmPassword, setInvalidConfirmPassword] =
    React.useState(false);

  const changePasswordMutation = useMutation(changePassword, {
    onError: (error) => {
      toast.show({
        description: error,
      });
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    },
    onSuccess: (d, v, c) => {
      toast.show({
        description: d.data.detail,
      });
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      navigation.goBack();
    },
  });

  const _oldOnchange = (value) => {
    setOldPassword(value);
  };

  const _newOnchange = (value) => {
    setNewPassword(value);
    setConfirmPassword("");
    setInvalidConfirmPassword(false);
  };

  const _confirmOnchange = (value) => {
    setConfirmPassword(value);
    console.log(newPassword, value);
    if (value !== newPassword) {
      setInvalidConfirmPassword(true);
    } else {
      setInvalidConfirmPassword(false);
    }
  };

  const _onSubmit = () => {
    changePasswordMutation.mutate({ old: oldPassword, new: newPassword });
  };

  return (
    <VStack alignItems="center" justifyContent="center" height="70%">
      <Center>
        <FormControl mt="12">
          <InputGroup width="100%">
            <InputLeftAddon children=" Old " w="20%" />
            <Input
              type="password"
              width="70%"
              value={oldPassword}
              onChangeText={_oldOnchange}
            />
          </InputGroup>
        </FormControl>

        <FormControl mt="12">
          <InputGroup width="100%">
            <InputLeftAddon children=" New " w="20%" />
            <Input
              type="password"
              width="70%"
              value={newPassword}
              onChangeText={_newOnchange}
            />
          </InputGroup>
        </FormControl>
        <FormControl mt="12" isInvalid={invalidConfirmPassword}>
          <InputGroup width="100%">
            <InputLeftAddon children="Confirm" w="20%" />
            <Input
              type="password"
              width="70%"
              value={confirmPassword}
              onChangeText={_confirmOnchange}
            />
          </InputGroup>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Password does not match
          </FormControl.ErrorMessage>
        </FormControl>
        <Button
          mt="12"
          bgColor="primary.800"
          px="40"
          isDisabled={
            oldPassword.length === 0 ||
            newPassword.length === 0 ||
            confirmPassword.length === 0
          }
          isLoading={changePasswordMutation.isLoading}
          onPress={_onSubmit}
        >
          Save
        </Button>
      </Center>
    </VStack>
  );
};

export default ChangePasswordScreen;
