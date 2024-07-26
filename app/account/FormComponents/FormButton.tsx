import React from 'react';
import cn from "classnames";

type Props = {
    label?: string
    onClick?: () => void
    color?: Style
    disabled?:boolean
}
type Style = "primary" | "secondary" | "accent" | "primary-border"
const styles: { [x: string]: string } = {
    ["primary"]: "bg-primary-500 dark:hover:bg-primary-200 hover:bg-primary-300 cursor-pointer",
    ["secondary"]: "bg-secondary-500 dark:hover:bg-secondary-200 hover:bg-secondary-300 cursor-pointer",
    ["accent"]: "bg-accent-500 dark:hover:bg-accent-200 hover:bg-accent-300 cursor-pointer",
    ["primary-border"]: "border border-primary-500 dark:hover:bg-primary-800 hover:bg-primary-600 dark:text-white hover:text-white cursor-pointer",
}
const disabledStyles = "bg-transparent border-2 dark:border-background-700 border-background-300 cursor-default dark:text-white"

const FormButton = ({label = "Confirm", onClick, color = "primary", disabled = false}: Props) => {
    function handleOnClick() {
        if(!disabled && onClick)
            onClick();
    }
    return (
        <button className={cn(`
                rounded flex justify-center items-center w-full h-7 my-4
                text-black bg-back
            `   , disabled? disabledStyles: styles[color])}
                onClick={handleOnClick}
        >
            {label}
        </button>
    );
};

export default FormButton;