"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { authClient } from "../../../lib/auth/auth-client";
import toast from "react-hot-toast";

const Register = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    setServerError("");
    const { error } = await authClient.signUp.email(
      {
        email: data.email,
        password: data.password,
        name: data.name,
        image: data.image,
        callbackURL: "/login",
      },
      {
        onSuccess: () => {
          toast.success("Registration Successful!");
          router.push("/login");
        },
        onError: (ctx) => {
          setServerError(
            ctx?.error?.message || "Something went wrong. Please try again."
          );
        },
      }
    );

    if (error) {
      setServerError(error.message || "Something went wrong. Please try again.");
    }
  };

  const [showPass, setShowPass] = useState(false);

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md my-25">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1">
            Create your account
          </h1>
          <p className="text-gray-400 text-sm">
            Join us and start your learning journey today
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">

          {/* error */}
          {serverError && (
            <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 mb-5 text-sm">
              <MdErrorOutline size={18} className="mt-0.5 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all bg-gray-50 placeholder-gray-300
                  ${errors.name
                    ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                    : "border-gray-200 focus:ring-violet-300 focus:border-violet-400"
                  }`}
                {...register("name", { required: "Full name is required" })}
              />
              {errors.name && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <MdErrorOutline size={13} />
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all bg-gray-50 placeholder-gray-300
                  ${errors.email
                    ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                    : "border-gray-200 focus:ring-violet-300 focus:border-violet-400"
                  }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <MdErrorOutline size={13} />
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Photo URL */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Photo URL
                <span className="ml-1.5 normal-case font-normal text-gray-400">(optional)</span>
              </label>
              <input
                type="url"
                placeholder="https://example.com/your-photo.jpg"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 transition-all bg-gray-50 placeholder-gray-300"
                {...register("image")}
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Create a strong password"
                  className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all bg-gray-50 placeholder-gray-300 pr-11
                    ${errors.password
                      ? "border-red-300 focus:ring-red-200 focus:border-red-400"
                      : "border-gray-200 focus:ring-violet-300 focus:border-violet-400"
                    }`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPass((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPass ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 flex items-center gap-1">
                  <MdErrorOutline size={13} />
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all shadow-md shadow-violet-100 mt-2 cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner loading-xs"></span>
                  Registering...
                </>
              ) : (
                "Register"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-[12px] my-6 opacity-55">
            OR continue with
          </div>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 text-sm font-semibold text-gray-700 transition-all cursor-pointer">
            <FaGoogle className="text-[#4285F4]" />
            Continue with Google
          </button>
        </div>

        {/* Login  */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-violet-600 font-semibold hover:text-violet-800 transition-colors"
          >
            Log in here
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;