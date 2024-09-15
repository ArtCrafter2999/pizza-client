'use client'
import React from 'react';
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import LinksBar, { BarLink } from "@/app/(main)/LinksBar/LinksBar";
import House from "@/app/(main)/LinksBar/icons/House";
import Profile from "@/app/(main)/LinksBar/icons/Profile";
import Video from "@/app/(main)/LinksBar/icons/Video";
import Camera from "@/app/(main)/LinksBar/icons/Camera";
import Settings from "@/app/(main)/LinksBar/icons/Settings";

const links: BarLink[] = [
    {title: "Home",     icon: House,    href: "/"},
    {title: "Profile",  icon: Profile,  href: "/profile"},
    {title: "Video",    icon: Video,    href: "/video"},
    {title: "Photo",    icon: Camera,   href: "/photo"},
    {title: "Settings", icon: Settings, href: "/settings"},
]

const Navigation = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <nav className="w-full h-16 dark:bg-background-800 dark:shadow-none shadow-md shadow-background-100 flex
                        items-center px-10 justify-between">
            <Link href={"/"}
                  className="text-3xl font-semibold text-secondary-700 dark:text-secondary-400 cursor-pointer">
                Pizza24
            </Link>
            <LinksBar links={links}/>
        </nav>
    );
};

export default Navigation;