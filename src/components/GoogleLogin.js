import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { errorAlert } from "./errorAlert";
import { successAlert } from "./successAlert";

const GoogleLogin = () => {
  const { googleLogin } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        successAlert("Login Successful");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        errorAlert(errorCode);
      });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="btn btn-outline outline-accent dark:bg-white dark:hover:text-black w-full"
    >
      continue with google
    </button>
  );
};

export default GoogleLogin;
