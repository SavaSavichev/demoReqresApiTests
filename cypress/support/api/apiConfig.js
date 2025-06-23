export const BASE_URL = "https://reqres.in/api";
export const API_KEY_HEADER = "x-api-key";
export const API_KEY_VALUE = "reqres-free-v1";

export const getHeaders = () => ({
  [API_KEY_HEADER]: API_KEY_VALUE,
});
