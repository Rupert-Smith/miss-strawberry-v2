import { CURRENT_API_VERSION } from "constants/constants";

export const apiCall = async (requestConfig) => {
  //  process.env.REACT_APP_DEV_API;

  const requestUrl = `http://localhost:5000/api/${CURRENT_API_VERSION}/${requestConfig.url}`;

  console.log(requestUrl);
  console.log(JSON.stringify(requestConfig.body));

  try {
    const response = await fetch(requestUrl, {
      method: requestConfig.method,
      headers: requestConfig.headers
        ? requestConfig.headers
        : {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
      body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
    });

    const responseJson = await response.json();

    console.log(responseJson);

    if (!response.ok) {
      return { status: "error", payload: responseJson.message };
    }

    return {
      status: "success",
      payload: responseJson,
      headers: response.headers,
    };
  } catch (error) {
    return { status: "error", payload: error.message };
  }
};
