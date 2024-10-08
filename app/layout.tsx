'use client'
import "./globals.css";
import {useState} from "react";
import cn from "classnames"

// import type { Metadata } from "next";
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setDark] = useState<boolean>(true);


  return (
    <html lang="en">
      <body className={cn({["dark"]: isDark}, "dark:bg-background-900 bg-background-50 dark:text-white")}>
          <input type={"checkbox"} className="fixed bottom-0 right-0" checked={isDark} onChange={() => setDark(!isDark)}/>
        {children}
      </body>
    </html>
  );
}
