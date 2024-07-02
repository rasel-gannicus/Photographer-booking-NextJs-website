import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photographer Booking Website",
  description:
    "A photographer booking website in Bangladesh created by Shafiqul Hasan Rasel with NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="min-h-screen mt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
