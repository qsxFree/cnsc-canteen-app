import * as SecureStore from "expo-secure-store";

async function authenticateCustomer() {
  await SecureStore.setItemAsync(
    "isCustomerAuthenticated",
    JSON.stringify(true)
  );
}

async function isCustomerAuthenticated() {
  return await SecureStore.getItemAsync("isCustomerAuthenticated");
}

export { authenticateCustomer, isCustomerAuthenticated };
