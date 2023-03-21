import { apiCallAxios } from "utilities/api/api-call-axios";
import usePopupConfigActions from "common/popup/hooks/use-popup-config-actions";

export default function useDefaultCall() {
  const { loading, errorDefault } = usePopupConfigActions();

  type callConfigTypes = {
    axiosConfig: {
      url: string;
      method: string;
      data?: any;
    };
    callSuccess: Function;
    errorHeader: string;
    errorMessage?: string;
  };

  const defaultCall = async (callConfig: callConfigTypes) => {
    console.log(callConfig);
    loading();
    try {
      const callData: any = await apiCallAxios(callConfig.axiosConfig);
      if (callData.status === 200 || callData.status === 201) {
        loading(false);
        callConfig.callSuccess(callData);
      } else if (callData.status) {
        loading(false);
      }
    } catch (error: any) {
      loading(false);
      handleError(error, callConfig);
    }
  };

  function handleError(error: any, callConfig: callConfigTypes) {
    console.error(error);
    if (!error?.response) {
      return errorDefault("could not connect to server", "no server response");
    }
    const errorHeader = callConfig.errorHeader;
    let backendMessage = returnErrorMessage();

    function returnErrorMessage() {
      if (error.response.status === 500 && error.response.data.error.message) {
        return error.response.data.error.message;
      }

      if (error.response.data.message) {
        return error.response.data.message;
      }

      if (callConfig.errorMessage) {
        return callConfig.errorMessage;
      }

      return "something went wrong";
    }

    errorDefault(backendMessage, errorHeader);
  }

  return { defaultCall };
}
