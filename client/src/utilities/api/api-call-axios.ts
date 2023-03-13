import { CURRENT_API_VERSION, REQUEST_TIMEOUT } from "constants/api-constants";
import axios from "axios";

type apiCallTypes = {
  url: string;
  data?: any;
  method: string;
};

export const apiCallAxios = ({ url, data, method }: apiCallTypes) => {
  const requestConfigFormatted = {
    url,
    method,
    timeout: REQUEST_TIMEOUT,
    baseURL: `http://localhost:5000/api/${CURRENT_API_VERSION}`,
    data: data || null,
  };
  return axios(requestConfigFormatted);
};
