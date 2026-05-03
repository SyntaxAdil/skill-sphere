import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  const FOO_LINKS = [
    { id: 1, href: "/", label: "Home" },
    { id: 2, href: "/courses", label: "Courses" },
    { id: 3, href: "/profile", label: "My Profile" },
    { id: 4, href: "/login", label: "Login" },
  ];
  return (
    <footer className="bg-base-100 border-t border-base-300 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-xl font-bold text-violet-600">SkillSphere</h2>
          <p className="text-sm text-gray-500 mt-3">
            Upgrade your skills with modern courses and expert instructors.
          </p>

          <div className="flex gap-3 mt-4">
            <a
              href="https://www.facebook.com/skilsphere"
              target="_blank"
              className="p-2 rounded-full border hover:bg-violet-500 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/skilsphere"
              target="_blank"
              className="p-2 rounded-full border hover:bg-violet-500 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.github.com/skilsphere"
              target="_blank"
              className="p-2 rounded-full border hover:bg-violet-500 hover:text-white transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            {FOO_LINKS.map((f) => (
              <li key={f.id}>
                <Link  className="hover:text-violet-600 cursor-pointer" href={f.href}>{f.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li className="hover:text-violet-600 cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-violet-600 cursor-pointer">
              Privacy Policy
            </li>
            <li>Email: skillsphere@email.com</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 border-t border-base-300 py-4">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
