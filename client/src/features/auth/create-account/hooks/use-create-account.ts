import useDefaultCall from "common/hooks/use-default-call";
import usePopupConfigActions from "common/popup/hooks/use-popup-config-actions";
import { useNavigate } from "react-router-dom";

export default function useCreateAccount() {
  const navigate = useNavigate();
  const { successCustomButtonsNoCross } = usePopupConfigActions();

  const { defaultCall } = useDefaultCall();

  const createAccount = (accountData: any) => {
    function callSuccess() {
      successCustomButtonsNoCross(
        `new user '${accountData.username}' created!`,
        [
          {
            actionId: "backToLoginPage",
            actionFunction: () => {
              navigate("/login");
            },
            actionText: "back to login page",
          },
        ]
      );
    }

    const callConfig = {
      axiosConfig: {
        url: "/users/create-account",
        method: "post",
        data: accountData,
      },
      callSuccess,
      errorHeader: "please try again",
    };

    defaultCall(callConfig);
  };

  return { createAccount };
}
