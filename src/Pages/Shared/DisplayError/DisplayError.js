import { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const DisplayError = () => {
  const { logOutUser } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {});
  };
  return (
    <div>
      <p className="text-3xl text-center text-red-500">Something went wrong</p>
      <p className="text-3xl text-center text-red-700">
        {error.statusText || error.message}
      </p>
      <h3>
        Please{" "}
        <button onClick={handleLogOutUser} className="btn">
          Logout
        </button>{" "}
        and login again.
      </h3>
    </div>
  );
};

export default DisplayError;
