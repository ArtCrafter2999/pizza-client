import cn from "classnames";
import React from "react";

type Props = {
    children: React.ReactNode;
    satisfied?: boolean
}

const ValidationRule = ({children, satisfied}: Props) => {
    return (
        <li className={cn(
            "text-sm",
            satisfied? "dark:text-primary-500 text-primary-600" : "dark:text-error-400 text-error-500"
        )}>
            {children}
        </li>
    );
};

export default ValidationRule