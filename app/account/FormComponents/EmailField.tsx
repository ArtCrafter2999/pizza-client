'use client'
import React, {useLayoutEffect, useMemo, useState} from 'react';
import AccountField from "@/app/account/FormComponents/AccountField";
import RuleContainer from "@/app/account/FormComponents/RuleContainer";
import ValidationRule from "@/app/account/FormComponents/ValidationRule";

type Props = {
    label?: string;
    value: string
    setValue: (value: string) => void;
    setValid?: (value: boolean) => void;
}

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

const EmailField = ({value, setValue, setValid, label = "Email"}: Props) => {
    const [isValidationShown, setValidationShown] = useState<boolean>(false);

    const isValid = useMemo(() => !!value && emailRegex.test(value), [value]);

    useLayoutEffect(() => {
        if(setValid)
            setValid(isValid)
    }, [setValid, isValid]);

    function handleFocused(focus: boolean) {
        if(!focus){
            setValidationShown(!isValid);
        }
    }

    return (
        <AccountField label={label} type={"email"} value={value} onChange={setValue} setFocused={handleFocused}>
            <RuleContainer shown={isValidationShown}>
                <ValidationRule satisfied={isValid}>
                    Email is {isValid || "not"} valid
                </ValidationRule>
            </RuleContainer>
        </AccountField>
    );
};

export default EmailField;