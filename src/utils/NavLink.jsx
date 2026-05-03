"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, className, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        px-3.5 py-1.5 rounded-xl text-[13.5px] font-medium transition-all duration-150
        ${isActive
          ? "text-violet-700 bg-violet-50 border border-violet-200"
          : "text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-transparent"
        }
        ${className ?? ""}
      `}
    >
      {children}
    </Link>
  );
}