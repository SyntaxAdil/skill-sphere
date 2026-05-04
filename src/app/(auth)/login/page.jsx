"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md mt-15">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1">
            Welcome back
          </h1>
          <p className="text-gray-400 text-sm">
            Log in to continue your learning journey
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
          <form className="space-y-4">
            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 transition-all bg-gray-50 placeholder-gray-300"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Password
                </label>
               
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 transition-all bg-gray-50 placeholder-gray-300 pr-11"
                />
                <button
                  type="button"
                  onClick={() => setShowPass((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPass ? <FaEyeSlash size={15} /> : <FaEye size={15} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 active:scale-[0.98] text-white font-semibold text-sm transition-all shadow-md shadow-violet-100 mt-2 cursor-pointer"
            >
              Log In
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

        {/* Register Link */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-violet-600 font-semibold hover:text-violet-800 transition-colors"
          >
            Create one free
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
