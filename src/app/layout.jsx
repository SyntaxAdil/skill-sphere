import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import { Toaster } from "react-hot-toast";
import CourseProvider from "../context/MyCourseContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "SkillSphere – Online Learning Platform",
  description:
    "A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.",

  icons: {
    icon: '/favicon.png',
  }
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${inter.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CourseProvider>
          <Navbar></Navbar>
          <main className="flex-1">{children}</main>
          <Footer></Footer>
          <Toaster position="top-center" reverseOrder={false} />
        </CourseProvider>
      </body>
    </html>
  );
}
