import React from "react";
import { auth } from "../../lib/auth/auth";
import { headers } from "next/headers";
import Image from "next/image";
import {
  FaEnvelope,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
} from "react-icons/fa";
import EditProfile from "../../components/profile/EditProfile";
import MyCourses from "./MyCourses";

const MyProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const { image, name, email, emailVerified, createdAt, updatedAt } = user;

  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((i) => i[0].toUpperCase())
    .join("");

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto space-y-5">
        <div className="relative bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Banner */}
          <div className="h-32 bg-linear-to-r from-violet-600 via-violet-500 to-violet-400" />

          <div className="px-8 pb-7">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 -mt-12">
              {/* Avatar */}
              <div className="relative shrink-0 w-fit">
                {image ? (
                  <div className="w-24 h-24 rounded-2xl ring-4 ring-white shadow-md overflow-hidden">
                    <Image
                      src={user?.image}
                      alt={name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-2xl ring-4 ring-white shadow-md bg-linear-to-br from-violet-600 to-violet-400 flex items-center justify-center text-white text-2xl font-bold">
                    {initials}
                  </div>
                )}
                {emailVerified && (
                  <span className="absolute -bottom-1.5 -right-1.5 bg-white rounded-full p-0.5 shadow">
                    <FaCheckCircle className="text-violet-500" size={18} />
                  </span>
                )}
              </div>

              {/*desktop Edit  */}
              <div className="hidden md:block ">
                <EditProfile user={user} />
              </div>
            </div>

            {/* Name */}
            <div className="mt-4 space-y-1">
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  {name}
                </h1>
                {emailVerified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-violet-50 text-violet-600 border border-violet-200 rounded-full px-2.5 py-0.5">
                    <FaCheckCircle size={10} />
                    Verified
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 flex items-center gap-1.5">
                <FaEnvelope size={12} />
                {email}
              </p>
            </div>

            {/*mobile Edit  */}
            <div className="my-4 md:hidden">
              <EditProfile user={user} />
            </div>
          </div>
        </div>

        {/* info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Account Info */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Account Info
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                  <FaEnvelope size={13} className="text-violet-500" />
                </span>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">
                    Email
                  </p>
                  <p className="text-sm font-semibold text-gray-800 break-all">
                    {email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                  <FaCheckCircle size={13} className="text-violet-500" />
                </span>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">
                    Status
                  </p>
                  <p
                    className={`text-sm font-semibold ${emailVerified ? "text-green-600" : "text-amber-500"}`}
                  >
                    {emailVerified ? "Email Verified" : "Not Verified"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* date activity */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              Activity
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                  <FaCalendarAlt size={13} className="text-violet-500" />
                </span>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">
                    Member Since
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    {new Date(createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-violet-50">
                  <FaClock size={13} className="text-violet-500" />
                </span>
                <div>
                  <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">
                    Last Updated
                  </p>
                  <p className="text-sm font-semibold text-gray-800">
                    {new Date(updatedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My courses */}
        <MyCourses />
      </div>
    </section>
  );
};

export default MyProfile;
