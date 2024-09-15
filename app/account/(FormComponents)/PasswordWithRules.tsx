'use client'
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {defaultRequirements, PasswordRequirements, PasswordSatisfied} from "@/api/account/models/password-requirements";
import useAsyncEffect from "use-async-effect";
import {getPasswordRequirements} from "@/api/account/get-password-requirements";
import AccountField from "@/app/account/(FormComponents)/AccountField";
import ValidationRule from "@/app/account/(FormComponents)/ValidationRule";
import RuleContainer from "@/app/account/(FormComponents)/RuleContainer";

const digit = /[0-9]/
const lowercase = /[a-z]/
const uppercase = /[A-Z]/
const special = /[^A-Za-z0-9]/

function checkRules(value: string, rules: PasswordRequirements): PasswordSatisfied{
    const satisfied: PasswordSatisfied = {
        requiredLength: value.length >= rules.requiredLength,
        requireDigit: !rules.requireDigit || digit.test(value),
        requireLowercase: !rules.requireLowercase || lowercase.test(value),
        requireUppercase: !rules.requireUppercase || uppercase.test(value),
        requireNonAlphanumeric: !rules.requireNonAlphanumeric || special.test(value),
        requiredUniqueChars: !rules.requiredUniqueChars || value.split("").findIndex(l => value.split(l).length <3) >-1
    }

    return satisfied as any;
}
function isAllValid(rules: PasswordSatisfied) {
    return Object.values(rules).every(v => v)
}


type Props = {
    value: string;
    onChange: (value: string) => void;
    setValid?: (value: boolean) => void;
}
const PasswordWithRules = ({value, onChange, setValid}: Props) => {
    const [isShowRules, setShowRules] = useState<boolean>(false);
    const [passwordRequirements, setPasswordRequirements] = useState<PasswordRequirements>(defaultRequirements);
    useAsyncEffect(async () => {
        setPasswordRequirements(await getPasswordRequirements());
    }, []);

    const rules = useMemo(() => checkRules(value, passwordRequirements), [value, passwordRequirements]);

    const handleFocused = useCallback((value: boolean) => {
        console.log(isAllValid(rules));
        if(value)
            setShowRules(true);
        else
            if(isAllValid(rules))
                setShowRules(false);
    }, [rules]);

    useEffect(() => {
        if(setValid)
            setValid(isAllValid(rules));
    }, [setValid, rules])
    return (
        <AccountField label={"Password"} value={value} onChange={onChange} type="password" setFocused={handleFocused}>
            <RuleContainer shown={isShowRules}>
                {!!passwordRequirements.requiredLength && passwordRequirements.requiredLength > 1 &&
                    <ValidationRule satisfied={rules.requiredLength}>
                        Password must be at least {passwordRequirements.requiredLength} characters long
                    </ValidationRule>
                }
                {passwordRequirements.requireLowercase &&
                    <ValidationRule satisfied={rules.requireLowercase}>
                        Password must contain a lowercase character
                    </ValidationRule>
                }
                {passwordRequirements.requireUppercase &&
					<ValidationRule satisfied={rules.requireUppercase}>
                        Password must contain an uppercase character
                    </ValidationRule>
                }
                {passwordRequirements.requireDigit &&
					<ValidationRule satisfied={rules.requireDigit}>
                        Password must contain a digit
                    </ValidationRule>
                }
                {passwordRequirements.requireNonAlphanumeric &&
					<ValidationRule satisfied={rules.requireNonAlphanumeric}>
                        Password must contain a special symbol
                    </ValidationRule>
                }
                {!!passwordRequirements.requiredUniqueChars &&
					<ValidationRule satisfied={rules.requiredUniqueChars}>
                        Password must contain {passwordRequirements.requiredUniqueChars} unique characters
                    </ValidationRule>
                }
            </RuleContainer>
        </AccountField>
    );
};

export default PasswordWithRules;