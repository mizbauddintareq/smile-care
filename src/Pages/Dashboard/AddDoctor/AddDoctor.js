import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { successAlert } from "../../../components/successAlert";
import Loader from "../../Shared/Loader/Loader";

const AddDoctor = () => {
  const imageHostKey = process.env.REACT_APP_imageBB_key;
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: specialties, isLoading } = useQuery({
    queryKey: ["specialty"],
    queryFn: async () => {
      const res = await fetch(
        "https://smile-care-server.vercel.app/appointmentSpecialty"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  const onSubmit = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const doctor = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          image: imgData.data.url,
        };

        // save doctors info to db
        fetch("https://smile-care-server.vercel.app/doctors", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("smileToken")}`,
          },
          body: JSON.stringify(doctor),
        })
          .then((res) => res.json())
          .then((data) => {
            successAlert("Doctor added successful");
            reset();
            navigate("/dashboard/manage-doctors");
          });
      });
  };
  return (
    <section className="my-16">
      <div className="lg:w-5/12 w-full mx-auto dark:bg-accent">
        <div className="shadow-xl rounded-xl p-6">
          <h3 className="text-xl text-center font-bold">Add A Doctor</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white">Doctor Name</span>
              </label>
              <input
                type="text"
                placeholder="Doctor Name"
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
                <span className="label-text dark:text-white">Specialty</span>
              </label>
              <select
                className="select select-bordered"
                {...register("specialty")}
              >
                {specialties.map((specialty) => (
                  <option key={specialty._id} value={specialty.name}>
                    {specialty.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text dark:text-white">Doctor Name</span>
              </label>
              <input
                type="file"
                className=" file-input file-input-bordered file-input-secondary  dark:bg-accent dark:text-white dark:border-white w-full"
                {...register("img", { required: "image is required" })}
              />
              {errors.img && (
                <p className="text-error">{errors.img?.message}</p>
              )}
            </div>

            <div className="form-control w-full my-4">
              <input
                type="submit"
                value="Add"
                className="btn btn-accent dark:bg-slate-900 w-full input-bordered"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddDoctor;
