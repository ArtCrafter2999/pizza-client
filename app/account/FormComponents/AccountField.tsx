import React from 'react';

type Props = {
    label: string
    value: string
    onChange: (value: string) => void;
    type?: "text" | "email" | "password"
    children?: React.ReactNode
    setFocused?: (v: boolean) => void
}

const AccountField = ({label, value, onChange, type = "text", children, setFocused}: Props) => {
    return (
        <div className="mb-4">
            <label className="">{label}</label>
            <input type={type} className="
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