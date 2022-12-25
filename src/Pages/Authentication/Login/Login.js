import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { errorAlert } from "../../../components/errorAlert";
import ForgotPassModal from "../../../components/ForgotPassModal";
import { successAlert } from "../../../components/successAlert";
import { AuthContext } from "../../../context/AuthProvider";

const Login = () => {
  const [openModal, setOpenModal] = useState(true);
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((userCredential) => {
        successAlert("Login Successful");
        reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        errorAlert(errorCode);
      });
  };
  return (
    <section className="my-16">
      <div className="lg:w-4/12 w-full mx-auto dark:bg-accent">
        <div className="shadow-xl rounded-xl p-6">
          <h3 className="text-xl text-center font-bold">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="input dark:bg-accent dark:text-white dark:border-white w-full input-bordered"
                {...register("email", { required: "email is required" })}
              />
              {errors.email && (
                <p className="text-error">{errors.email?.message}</p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white">Password</span>
              </label>
              <input
                type="password"
                placeholder="Type password"
                className="input w-full dark:bg-accent dark:text-white dark:border-white input-bordered"
                {...register("password", {
                  required: "password is required",
                })}
              />
              {errors.password && (
                <p className="text-error">{errors.password?.message}</p>
              )}
              <small>
                <label
                  htmlFor="forgot-pass"
                  onClick={() => setOpenModal(true)}
                  className="cursor-pointer"
                >
                  Forgot password?
                </label>
              </small>
            </div>
            <div className="form-control w-full my-4">
              <input
                type="submit"
                value="login"
                className="btn btn-accent dark:bg-slate-900 w-full input-bordered"
              />
            </div>
          </form>
          <div>
            <p className="text-center">
              New to smile-care?{" "}
              <Link className="text-secondary" to="/registration">
                create an account
              </Link>{" "}
            </p>
            <div className="divider">OR</div>
            <button className="btn btn-outline outline-accent dark:bg-white dark:hover:text-black w-full">
              continue with google
            </button>
          </div>
        </div>
      </div>
      {openModal && <ForgotPassModal setOpenModal={setOpenModal} />}
    </section>
  );
};

export default Login;
