import * as SecureStore from "expo-secure-store";
import React from "react";

function getToken() {
  return SecureStore.getItemAsync("jws");
}

function setToken(token) {
  return SecureStore.setItemAsync("jws", token);
}

const useToken = (token) => {
  const [status, setStatus] = React.useState("pending");
  const [resultToken, setResultToken] = React.useState(null);

  if (!token === undefined) {
    setToken(token)
      .then((info) => {
        getToken()
          .then((info) => setStatus("success"))
          .catch((err) => setStatus("error"));
      })
      .catch((err) => setStatus("error"));
  } else {
    getToken()
      .then((info) => setStatus("success"))
      .catch((err) => setStatus("error"));
  }
};

export default { getToken: getToken, setToken: setToken, useToken: useToken };
