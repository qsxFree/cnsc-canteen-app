const axios = require("axios");
import SYSTEM_CONSTANT from "../service/constant";

const url = SYSTEM_CONSTANT.SERVER_URL;

export const loginBridge = (data) => {
  return axios({
    method: "post",
    url: `${url}/auth/customer/login/`,
    data: {
      username: data.username,
      password: data.password,
    },
  });
};
