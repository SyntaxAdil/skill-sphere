"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { IoRocketSharp } from "react-icons/io5";
import NavLink from "./../../utils/NavLink";
import { authClient } from "../../lib/auth/auth-client";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/profile", label: "My Profile" },
];

// avatr
const Avatar = ({ user, size = 32 }) => {
  const initials = user?.name
    ?.split(" ")
    .slice(0, 2)
    .map((i) => i[0].toUpperCase())
    .join("") || "?";

  const sizeClass = size === 30 ? "w-[30px] h-[30px] text-[10px]" : "w-8 h-8 text-[11px]";

  if (user?.image) {
    return (
      <Image
        src={user.image}
        width={size}
        height={size}
        alt={user.name}
        className={`rounded-full ring-2 ring-violet-200 cursor-pointer object-cover`}
      />
    );
  }

  return (
    <div
      className={`${sizeClass} rounded-full ring-2 ring-violet-200 bg-linear-to-br from-violet-600 to-violet-400 flex items-center justify-center text-white font-bold cursor-pointer shrink-0`}
    >
      {initials}
    </div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 md:px-6">
        {/* nav */}
        <nav className="mx-auto max-w-6xl flex items-center justify-between h-14.5 px-4 rounded-2xl bg-white/80 backdrop-blur-md border border-violet-100 shadow-sm">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-8 w-8 items-center justify-center rounded-xl bg-linear-to-br from-violet-600 to-violet-400 shrink-0"
            >
              <IoRocketSharp color="white" />
            </motion.span>
            <span className="text-xl font-bold tracking-tight text-gray-900">
              SkillSphere
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-0.5 list-none">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <NavLink href={href}>{label}</NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            {isPending ? (
              <span className="loading loading-spinner loading-sm text-violet-500" />
            ) : user ? (
              <>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Avatar user={user} size={32} />
                </motion.div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={async () => await authClient.signOut()}
                  className="flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-[13px] font-medium text-gray-400 transition-all hover:border-red-200 hover:text-red-500 hover:bg-red-50"
                >
                  <FiLogOut size={13} />
                  Log out
                </motion.button>
              </>
            ) : (
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/login"
                  className="rounded-xl bg-linear-to-r from-violet-600 to-violet-400 px-4 py-1.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Log in
                </Link>
              </motion.div>
            )}
          </div>

          {/* Mobile: avatar + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {isPending ? (
              <span className="loading loading-spinner loading-xs text-violet-500" />
            ) : (
              user && <Avatar user={user} size={30} />
            )}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen((v) => !v)}
              className="flex h-8 w-8 items-center justify-center rounded-xl border border-gray-200 text-gray-400"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? "x" : "m"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.15 }}
                >
                  {open ? <FiX size={16} /> : <FiMenu size={16} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 420, damping: 36 }}
              className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <ul className="flex flex-col gap-0.5 p-2 list-none">
                {NAV_LINKS.map(({ href, label }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.05,
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  >
                    <NavLink
                      href={href}
                      className="block w-full"
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <div className="border-t border-gray-100 p-2">
                {isPending ? (
                  <div className="flex justify-center py-2">
                    <span className="loading loading-spinner loading-sm text-violet-500" />
                  </div>
                ) : user ? (
                  <button
                    onClick={async () => await authClient.signOut()}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-2 text-[13px] font-medium text-gray-400 transition-all hover:border-red-200 hover:text-red-500 hover:bg-red-50"
                  >
                    <FiLogOut size={13} />
                    Log out
                  </button>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setOpen(false)}
                    className="block w-full rounded-xl bg-linear-to-r from-violet-600 to-violet-400 py-2 text-center text-[13px] font-semibold text-white"
                  >
                    Log in
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}