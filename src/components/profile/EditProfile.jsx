"use client";
import { FaEdit } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { authClient } from "../../lib/auth/auth-client";

const EditProfile = ({ user }) => {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: user?.name || "",
      image: user?.image || "",
    },
  });

  const onSubmit = async (data) => {
    setServerError("");

    const { error } = await authClient.updateUser(
      {
        name: data.name,
        image: data.image,
      },
      {
        onSuccess: () => {
          toast.success("Profile Updated Successfully!");
          document.getElementById("edit_profile_modal").close();
          router.refresh();
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

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          document.getElementById("edit_profile_modal").showModal()
        }
      >
        <FaEdit /> Edit Profile
      </button>

      <dialog id="edit_profile_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-primary flex gap-1 items-center">
            <FaEdit /> Edit your profile
          </h3>

          <form className="py-4">
            {/* Server error banner */}
            {serverError && (
              <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 mb-5 text-sm">
                <MdErrorOutline size={18} className="mt-0.5 shrink-0" />
                <span>{serverError}</span>
              </div>
            )}

            {/* Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Name
              </label>
              <input
                type="text"
                placeholder="Your full name"
                className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 transition-all bg-gray-50 placeholder-gray-300
                  ${
                    errors.name
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

            {/* Photo URL */}
            <div className="space-y-1.5 mt-3">
              <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                Photo URL
                <span className="ml-1.5 normal-case font-normal text-gray-400">
                  (optional)
                </span>
              </label>
              <input
                type="url"
                placeholder="https://example.com/your-photo.jpg"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none focus:ring-2 focus:ring-violet-300 focus:border-violet-400 transition-all bg-gray-50 placeholder-gray-300"
                {...register("image")}
              />
            </div>

            <div className="modal-action">
              <button
                type="button"
                className="btn"
                onClick={() =>
                  document.getElementById("edit_profile_modal").close()
                }
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                className="btn btn-primary flex items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="loading loading-spinner loading-xs" />
                    Saving...
                  </>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Click outside to close */}
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default EditProfile;