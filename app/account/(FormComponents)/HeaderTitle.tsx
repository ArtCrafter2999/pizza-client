import React from 'react';

type Props = {
    title: string;
    children?: React.ReactNode
}

const HeaderTitle = ({title, children}: Props) => {
    return (
        <h1 className=" text-3xl font-semibold w-full flex flex-col justify-center items-center text-secondary-700 mb-4
                        dark:text-secondary-400">
            {title}
            <p className="text-sm text-background-500 font-normal text-center">{children}</p>
        </h1>
    );
};

export default HeaderTitle;