import React, { ComponentType } from 'react';
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import cn from "classnames";

export interface BarLink {
    title: string;
    icon: ComponentType<any>
    href?: string;
}

type Props = {
    links: BarLink[]
}

const LinksBar = ({ links }: Props) => {
    const pathname = usePathname();
    const index = links.findIndex(l => pathname === l.href)
    const width = index * 80 + 44

    return (
        <div className="relative select-none">
            <div className="right-0 -top-5 absolute gap-10 px-5 h-16">
                <div className="flex gap-10 px-16 relative h-0">
                    {links.map((l, i) =>
                        <Link key={l.title}
                              className="z-10 w-10"
                              href={l.href ?? ""}
                        >
                            <div
                                style={i !== index ? {
                                    transform: "translateY(20px)",
                                    opacity: "0"
                                } : undefined}
                                className=" font-semibold w-full flex justify-center h-4 opacity-100 text-black
                                            transition-[transform, opacity] ease duration-300"
                            >
                                {l.title}
                            </div>
                            <l.icon
                                style={i === index ? {
                                    transform: "translateY(31px)"
                                } : undefined}
                                className={cn(`size-10 transition-[transform] ease duration-300 select-none
                                    text-black`)}
                                alt={l.title + "icon"}
                            />
                        </Link>
                    )}
                </div>
                <div className="dark:bg-background-50 bg-background-100 rounded-tl-2xl rounded-tr-2xl h-[100%] w-full top-0">
                </div>
                <div className="flex bottom-0 h-[70%]">
                    {width > 0 &&
						<>
							<Panel width={width} />
							<div className="basis-20 relative">
								<div
									className=" absolute w-20 h-20 bottom-0 rounded-[100%] border-[6px]
									            dark:border-background-900 border-background-50 bg-primary-500"
                                >

								</div>
							</div>
						</>
                    }
                    <Panel />
                </div>
            </div>
        </div>
    );
};

const Panel = ({ width }: { width?: number }) => (
    <div
        style={{ flexBasis: width }}
        className={cn(`dark:bg-background-50 bg-background-100 rounded-bl-2xl h-[40%] rounded-br-2xl
                            transform -translate-y-0.5`,
            width ? "transition-[flex-basis] ease duration-300" : "flex-1")} />
)

export default LinksBar;