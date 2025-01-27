import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HomeSidebar from "./components/HomeSidebar";
import Workspace from "./components/Workspace";
import { Breadcrumbs } from "./components/Breadcrumbs";
import MobileSidebar from "./components/MobileSidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <HomeSidebar />
        <MobileSidebar />
        <main className="flex flex-col w-full px-8 h-full">
          <Workspace isSearch />
          <Breadcrumbs />
          <div className="py-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
