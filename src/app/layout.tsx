import { Header } from "@/component/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Footer } from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <main className="flex justify-center min-h-screen pt-[calc(94px+4rem)] p-16">
          {children}
          <ToastContainer />
        </main>
        <Footer />
      </body>
    </html>
  );
}
