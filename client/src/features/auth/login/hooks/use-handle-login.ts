import { useNavigate, useLocation } from "react-router-dom";
import { authActions } from "features/auth/store/auth-slice";
import useDefaultCall from "common/hooks/use-default-call";
import { useDispatch } from "react-redux";
import { profileSettingsActions } from "common/store/profile-settings-slice";

export default function useHandleLogin(username: string, password: string) {
  const { defaultCall } = useDefaultCall();
  const navigate = useNavigate();
  const location: any = useLocation();
  const dispatch = useDispatch();

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    function callSuccess(loginData: any) {
      console.log(loginData);

      dispatch(profileSettingsActions.setProfile(loginData.data.data.user));

      dispatch(
        authActions.setAuthorisedConfig({
          authorised: true,
          token: loginData.token,
        })
      );
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }

    const callConfig = {
      axiosConfig: {
        url: "/users/login",
        method: "post",
        data: { username, password },
      },
      callSuccess,
      errorMessage: "login failed, please try again",
      errorHeader: "login failed",
    };

    defaultCall(callConfig);
  };

  return { handleLogin };
}
