import * as SecureStore from "expo-secure-store";

function getToken() {
  return SecureStore.getItemAsync("jws");
}

function setToken(token) {
  return SecureStore.setItemAsync("jws", token);
}

const useToken = async () => {
  let resultToken = null;
  const result = await SecureStore.getItemAsync("jws");

  if (result) {
    resultToken = result;
  } else {
    resultToken = null;
  }

  const setToken = async (token) => {
    await SecureStore.setItemAsync("jws");
    resultToken = await SecureStore.getItemAsync("jws");
  };

  return { token: resultToken, setToken: setToken };
};

export default { getToken: getToken, setToken: setToken, useToken: useToken };
