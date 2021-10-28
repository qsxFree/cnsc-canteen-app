import Token from "../hooks/useToken";
import SYSTEM_CONSTANT from "../service/constant";
const axios = require("axios");

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
