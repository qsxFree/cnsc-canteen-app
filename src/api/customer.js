import Token from "../hooks/useToken";
import SYSTEM_CONSTANT from "../service/constant";
const axios = require("axios");

const url = SYSTEM_CONSTANT.SERVER_URL;

//Fetching customer info
export const customerProfileQuery = async () => {
  return axios({
    method: "get",
    url: `${url}/customer/profile/`,
    headers: {
      Authorization: `Token ${await Token.getToken()}`,
    },
  });
};

export const menuListQuery = async () => {
  return axios({
    method: "get",
    url: `${url}/customer/menu/`,
    headers: {
      Authorization: `Token ${await Token.getToken()}`,
    },
  });
};

export const orderListQuery = async () => {
  return axios({
    method: "get",
    url: `${url}/customer/order_list/`,
    headers: {
      Authorization: `Token ${await Token.getToken()}`,
    },
  });
};

export const changeOrderStatusQuery = async (data) => {
  return axios({
    method: "post",
    url: `${url}/customer/set_order_status/${data.path}/`,
    headers: {
      Authorization: `Token ${await Token.getToken()}`,
    },
    data: {
      status: data.status,
    },
  });
};

export const balanceLog = async () => {
  return axios({
    method: "get",
    url: `${url}/customer/balance_logs/`,
    headers: {
      Authorization: `Token ${await Token.getToken()}`,
    },
  });
};

export const sendNotificationToken = async (data) => {
  return axios({
    method: "post",
    url: `${url}/customer/add_notif_token/`,
    headers: {
      Authorization: `Token ${await Token.getToken()}`,
    },
    data: {
      notif_token: data.token,
    },
  });
};
