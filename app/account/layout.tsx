import React from "react";
import SequentialFocus from "@/app/account/(FormComponents)/SequentialFocus";

export default function Layout({
                                   children,
                               }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex h-[97vh] justify-center items-center select-none">
            <div className="dark:bg-background-800 bg-white border dark:border-transparent
                            border-secondary-600 rounded-xl h-fit dark:no-shadow
                            w-80 p-3">
                <SequentialFocus>
                    {children}
                </SequentialFocus>
            </div>
        </main>
    );
}