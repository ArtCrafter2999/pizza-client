import React from 'react';
import Navigation from "@/app/(main)/Navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navigation/>
        {children}
    </>
  );
}