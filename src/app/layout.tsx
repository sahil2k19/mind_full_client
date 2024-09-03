"use client";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import Head from "next/head"; // Import Head from next/head

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current route path

  const noFooterPaths = ["/admin", "/assesment"];
  const shouldHideFooter = noFooterPaths.some((path) => pathname.startsWith(path));

  // Set dynamic title based on the path or other conditions
  const getTitle = () => {
    if (pathname === "/admin") return "Admin Panel";
    if (pathname === "/assesment") return "Assessment";
    return "mindful TMS"; // Default title
  };

  return (
    <html lang="en">
      <Head>
        <title>{getTitle()}</title>
      </Head>
      <body className={inter.className}>
        <Navbar />
        <Toaster position="top-right" />
        {children}
        {!shouldHideFooter && <Footer />}
      </body>
    </html>
  );
}
