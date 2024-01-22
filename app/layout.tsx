import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <ToasterProvider/>
        <ModalProvider/>
        {children}
      </body>
    </html>
    </ClerkProvider>

  );
}

// https://ui.shadcn.com - CLI component "Mostly for CMS"
// https://clerk.com - Sign in and out modal 
// Cloudinary - picture update
// planetscale - databse 
// react-hot-toast - snack bars