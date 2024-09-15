'use client'
import React from 'react';
import { useFocusRef } from "@/app/account/(FormComponents)/SequentialFocus";

type Props = {
    label: string
    value: string
    onChange: (value: string) => void;
    type?: "text" | "email" | "password"
    children?: React.ReactNode
    setFocused?: (v: boolean) => void
}

const AccountField = ({label, value, onChange, type = "text", children, setFocused}: Props) => {
    const ref = useFocusRef<HTMLInputElement>();

    return (
        <div className="mb-4">
            <label className="">{label}</label>
            <input
                ref={ref}
                type={type}
                className="
                        outline-0 rounded-md w-full dark:bg-transparent border
                        dark:border-secondary-200 border-secondary-600 px-1"
                onChange={(e) => onChange(e.target.value)}
                value={value}
                onFocus={() => setFocused && setFocused(true)}
                onBlur={() => setFocused && setFocused(false)}
            />
            {children}
        </div>
    );
};

export default AccountField;