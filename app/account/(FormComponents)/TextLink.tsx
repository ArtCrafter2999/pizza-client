import React from 'react';
import Link from "next/link";

type Props = {
    href: string;
    text: string
}

const TextLink = ({text, href}: Props) => {
    return (
        <Link href={href}
              className="   text-accent-400 dark:text-accent-200 underline hover:no-underline
                            cursor-pointer dark:hover:text-accent-300 hover:text-accent-500">
            {text}
        </Link>
    );
};

export default TextLink;