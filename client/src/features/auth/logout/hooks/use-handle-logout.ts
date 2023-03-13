import { useNavigate } from "react-router-dom";
import useDefaultCall from "common/hooks/use-default-call";

export default function useHandleLogout() {
  const { defaultCall } = useDefaultCall();
  const navigate = useNavigate();

  const handleLogout = () => {
    function callSuccess(logoutData: any) {
      navigate("/login");
      window.location.reload();
    }

    const callConfig = {
      axiosConfig: {
        url: "/users/logout",
        method: "get",
      },
      callSuccess,
      errorHeader: "logout failed",
    };

    defaultCall(callConfig);
  };

  return { handleLogout };
}
