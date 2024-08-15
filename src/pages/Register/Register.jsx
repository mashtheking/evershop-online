import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import { PiEyeClosedFill } from "react-icons/pi";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin";

const Register = () => {
  const { createUser, userProfileUpdate } = useAuth();
  const axiosPublic = useAxiosPublic();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      photo: "",
    },
  });
  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const photo = data.photo;
    try {
      const response = await createUser(email, password);
      const user = response.user;
      await userProfileUpdate(name, photo);
      const userInfo = {
        name,
        email,
        photo,
        date: new Date(),
      };
      navigate(from, { replace: true });
      if (user) {
        const { data } = await axiosPublic.post("/users", userInfo);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            title: "Success!",
            text: `Welcome ${user.displayName ? user.displayName : user.email}`,
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
          navigate(from, { replace: true });
        }
      }
    } catch (error) {
      console.error("Error", error);
      Swal.fire({
        title: "Error!",
        text: `${error.message}`,
        icon: "error",
        confirmButtonText: "Try Again",
        timer: 3000,
      });
    }
  };

  return (
    <div>
      <div className="hero bg-[#8d9968] my-20 rounded-xl shadow-2xl">
        <div className="hero-content">
          <div className="card bg-base-100">
            <h2 className="text-5xl font-bold text-center my-5">
              Register Now
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  name="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control relative mb-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password should not be less than 6 characters!",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                      message:
                        "Password must contain at least one capital letter and one special character (! @ # $ % ^ & *)",
                    },
                  })}
                />
                <span
                  className="absolute right-2 bottom-4"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <FaEye /> : <PiEyeClosedFill />}
                </span>
                <div>
                  {errors.password?.type === "minLength" && (
                    <span className="text-red-600">
                      {errors.password?.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
                      {errors.password?.message}
                    </span>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your photo url"
                  name="photo"
                  className="input input-bordered"
                  {...register("photo", { required: false })}
                />
                {errors.photo && (
                  <span className="text-red-600">Photo is required</span>
                )}
              </div>

              <div className="form-control mt-6">
                <input
                  className="btn bg-[#D1A054B3] text-white"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <div className="text-center space-y-4 mb-8">
              <p className="text-[#D1A054]">
                Already registered?{" "}
                <Link to="/login" className="font-semibold">
                  Login now
                </Link>
              </p>
              <p>Or Sign up with</p>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
