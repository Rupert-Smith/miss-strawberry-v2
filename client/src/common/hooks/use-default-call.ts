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

  function handleError(error: any, callConfig: any) {
    console.error(error);
    if (!error?.response) {
      return errorDefault("no server response", "something went wrong");
    }
    const defaultErrorHeader = callConfig.errorHeader;
    let backendMessage = returnErrorMessage();

    function returnErrorMessage() {
      if (error.response.status === 500) {
        return error.response.data.error.message;
      }
      if (error.response.data.message) {
        return error.response.data.message;
      } else {
        return "wow, something really bad went wrong here. not sure about this one. maybe just give up hope?";
      }
    }
    if (callConfig.cleanUp && backendMessage) {
      backendMessage = callConfig.errorCleanup(backendMessage);
    }

    errorDefault(backendMessage, defaultErrorHeader);
  }

  return { defaultCall };
}
