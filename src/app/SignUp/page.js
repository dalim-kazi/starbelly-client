"use client";
import { userSignUpAsync } from "@/Data/Action/Auth.Action/Auth.Action";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useDispatch} from "react-redux";
const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [viewPassword, setViewPassword] = useState(false);
  const dispatch = useDispatch();
  const router =useRouter()
  const handleTogglePassword = () => {
    setViewPassword(!viewPassword);
  };

  const onSubmit = async (data) => {
    const userInfo = {
      name: data?.name,
      email: data?.email,
      password: data?.password,
    };
    const result = await dispatch(userSignUpAsync(userInfo));
    if (result.type === "auth/signUp/fulfilled") {
      reset();
      router.push("/")
    }
  };
  return (
    <div className=" h-screen px-5">
      <div className="card shrink-0 w-full max-w-md mx-auto border-t-4 border-yellow-400 shadow-xl bg-base-100 mt-60  mb-20">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600 mt-2">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600 mt-2">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <div className="w-full relative">
              <input
                type={`${viewPassword ? "text" : "password"}`}
                placeholder="password"
                className="input input-bordered w-full"
                {...register("password", { required: true })}
              />
              <div className=" absolute bottom-2 right-5">
                <button type="button" onClick={handleTogglePassword}>
                  {viewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                </button>
              </div>
            </div>

            {errors.password && (
              <span className="text-red-600 mt-2">This field is required</span>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary text-lg"> Register</button>
          </div>
        </form>
        <p className="text-center py-2">
          already have an account{" "}
          <Link className="text-blue-600 underline" href={"/login"}>
            login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Signup;
