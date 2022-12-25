import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { errorAlert } from "../../../components/errorAlert";
import { successAlert } from "../../../components/successAlert";
import { AuthContext } from "../../../context/AuthProvider";

const Registration = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        // const user = userCredential.user;

        const userInfo = {
          displayName: data.name,
        };
        handleUpdateUser(userInfo);
        successAlert("Registration Successful");
        reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        errorAlert(errorCode);
      });
  };
  const handleUpdateUser = (info) => {
    updateUserProfile(info)
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <section className="my-16">
      <div className="lg:w-4/12 w-full mx-auto dark:bg-accent">
        <div className="shadow-xl rounded-xl p-6">
          <h3 className="text-xl text-center font-bold">Sign Up</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input dark:bg-accent dark:text-white dark:border-white w-full input-bordered"
                {...register("name", { required: "name is required" })}
              />
              {errors.name && (
                <p className="text-error">{errors.name?.message}</p>
              )}
            </div>
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
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 Characters",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    message:
                      "password must be 1 uppercase 1 lowercase & 1 special character",
                  },
                })}
              />
              {errors.password && (
                <p className="text-error">{errors.password?.message}</p>
              )}
            </div>
            <div className="form-control w-full my-4">
              <input
                type="submit"
                value="Sign Up"
                className="btn btn-accent dark:bg-slate-900 w-full input-bordered"
              />
            </div>
          </form>
          <div>
            <p className="text-center">
              Already have an account please?{" "}
              <Link className="text-secondary" to="/login">
                login
              </Link>{" "}
            </p>
            <div className="divider">OR</div>
            <button className="btn btn-outline outline-accent dark:bg-white dark:hover:text-black w-full">
              continue with google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
