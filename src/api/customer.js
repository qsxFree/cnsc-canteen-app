import Token from "../hooks/useToken";
import SYSTEM_CONSTANT from "../service/constant";
const axios = require("axios");

Token.setToken(
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM3OTEwMjA2LCJqdGkiOiIzNjFjMGFiYTZkYzk0ZTFiYjM4NWUwNTlmMTkwMmJlMiIsInVzZXJfaWQiOjJ9.XFqibURQP8uJd7AEcs8F2tV2nBnI3b1vH6VgXYXRZOk"
);
const url = SYSTEM_CONSTANT.SERVER_URL;

//Fetching customer info
export const fetchCustomerProfile = async () => {
  return axios({
    method: "get",
    url: `${url}/customer/profile/`,
    headers: {
      Authorization: `Token ${await Token.getToken()}`,
    },
  });
};

export const fetchMenuList = async () => {
  return axios({
    method: "get",
    url: `${url}/customer/menu/`,
    headers: {
      Authorization: `Token ${await Token.getToken()}`,
    },
  });
};
