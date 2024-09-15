'use client'
import React, {useLayoutEffect, useMemo, useState} from 'react';
import AccountField from "@/app/account/(FormComponents)/AccountField";
import RuleContainer from "@/app/account/(FormComponents)/RuleContainer";
import ValidationRule from "@/app/account/(FormComponents)/ValidationRule";

type Props = {
    password: string
    value: string
    setValue: (value: string) => void
    setValid: (value: boolean) => void;
}

const ConfirmPasswordField = ({password, value, setValue, setValid}: Props) => {
    const [isValidationShown, setValidationShown] = useState<boolean>(false);

    const isValid = useMemo(() => value === password, [value, password]);

    useLayoutEffect(() => {
        if(setValid)
            setValid(isValid);
    }, [setValid, isValid]);

    function handleFocused(focus: boolean) {
        if(!focus){
            setValidationShown(!isValid);
        }
    }
    return (
        <AccountField
            label={"Confirm Password"}
            value={value}
            onChange={setValue}
            type={"password"}
            setFocused={handleFocused}
        >
            <RuleContainer shown={isValidationShown}>
                <ValidationRule satisfied={isValid}>
                    Passwords are {isValid || "not"} matching
                </ValidationRule>
            </RuleContainer>
        </AccountField>
    );
};

export default ConfirmPasswordField;