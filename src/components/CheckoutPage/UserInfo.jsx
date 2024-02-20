"use client";
import React from "react";
import { useForm } from "react-hook-form";

const UserInfo = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section className="w-full lg:shadow-md p-10  lg:border-t-4 rounded-md border-[#f5c332] lg:max-h-[650px]">
      <h1 className="text-xl mb-5 font-semibold">Billing details</h1>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full focus:outline-none border-b-2 border-[#f5c332] bg-[#f9fafc] p-3 text-md"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-600 mt-2">This field is required</span>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Phone Number"
              className="w-full focus:outline-none border-b-2 border-[#f5c332] bg-[#f9fafc] p-3 text-lg"
              {...register("phone", { required: true })}
            />
            {errors.phone && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full focus:outline-none border-b-2 border-[#f5c332] bg-[#f9fafc] p-3 text-lg"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div>
            <input
              type="PostCode"
              placeholder="Post Code"
              className="w-full focus:outline-none border-b-2 border-[#f5c332] bg-[#f9fafc] p-3 text-lg"
              {...register("postCode", { required: true })}
            />
            {errors.postCode && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="City"
              className="w-full focus:outline-none border-b-2 border-[#f5c332] bg-[#f9fafc] p-3 text-lg"
              {...register("city", { required: true })}
            />
            {errors.city && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              className="w-full focus:outline-none border-b-2 border-[#f5c332] bg-[#f9fafc] p-3 text-lg"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-red-600">This field is required</span>
            )}
          </div>
        </div>
        <div>
          <textarea
            cols={6}
            rows={6}
            placeholder="order details"
            className="w-full min-h-32 max-h-32 text-lg p-2 mt-14 focus:outline-none border-b-2 border-[#f5c332]"
            {...register("orderDetails", { required: true })}
          />
          {errors.orderDetails && (
            <span className="text-red-600">This field is required</span>
          )}
        </div>
        <div className="w-full flex justify-center mt-10">
          <input
            type="submit"
            className="bg-yellow-400 p-2 w-1/2  text-lg rounded-md hover:bg-yellow-500 cursor-pointer"
            value={"Place Order"}
          />
        </div>
      </form>
    </section>
  );
};

export default UserInfo;
