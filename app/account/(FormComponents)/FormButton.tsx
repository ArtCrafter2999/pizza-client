'use client'
import React from 'react';
import cn from "classnames";
import { useFocusRef } from "@/app/account/(FormComponents)/SequentialFocus";
import { ButtonStyle, buttonStyles } from "@/app/button-styles";

type Props = {
    label?: string
    onClick?: () => void
    color?: ButtonStyle
    disabled?:boolean
}

const FormButton = ({label = "Confirm", onClick, color = "primary", disabled = false}: Props) => {
    const ref = useFocusRef<HTMLButtonElement>();

    function handleOnClick() {
        if(!disabled && onClick)
            onClick();
    }
    return (
        <button
            ref={ref}
            className={cn(
                `rounded flex justify-center items-center w-full h-7 mt-4 text-black`,
                disabled? buttonStyles["disabled"]: buttonStyles[color])}
                onClick={handleOnClick}
        >
            {label}
        </button>
    );
};

export default FormButton;