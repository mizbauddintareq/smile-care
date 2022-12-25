import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { errorAlert } from "./errorAlert";
import { successAlert } from "./successAlert";

const ForgotPassModal = ({ setOpenModal }) => {
  const { resetUserPass } = useContext(AuthContext);
  const handleForgotPassword = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    resetUserPass(email)
      .then(() => {
        successAlert("Check Your Email");
        e.target.reset();
        setOpenModal(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.error(error);
        errorAlert(errorCode);
      });
  };
  return (
    <>
      <input type="checkbox" id="forgot-pass" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative dark:bg-slate-900 dark:text-white">
          <label
            htmlFor="forgot-pass"
            className="btn btn-sm btn-circle dark:bg-white dark:text-slate-900 bg-slate-900 absolute right-2 top-2"
          >
            ✕
          </label>

          <form
            onSubmit={handleForgotPassword}
            className="grid grid-cols-1 gap-3 mt-8"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input w-full dark:bg-slate-900 dark:text-white dark:border-accent input-bordered "
            />
            <input
              type="submit"
              value="send email"
              className="input btn btn-accent w-full input-bordered dark:border-accent dark:bg-white dark:text-slate-900"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassModal;
