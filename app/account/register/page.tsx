'use client'
import React, {useState} from 'react';
import Link from "next/link";
import PasswordWithRules from "@/app/account/FormComponents/PasswordWithRules";
import AccountField from "@/app/account/FormComponents/AccountField";
import HeaderTitle from "@/app/account/FormComponents/HeaderTitle";
import FormButton from "@/app/account/FormComponents/FormButton";
import TextLink from "@/app/account/FormComponents/TextLink";
import {register} from "@/api/account/register";
import {useRouter} from "next/navigation";
import EmailField from "@/app/account/FormComponents/EmailField";
import ConfirmPasswordField from "@/app/account/FormComponents/ConfirmPasswordField";

const Register = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isEmailValid, setEmailValid] = useState<boolean>(false);
    const [isPasswordValid, setPasswordValid] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>();
    const router = useRouter();

    function handleRegister() {
        register({name, email, password}).then(r => r && router.push("/"));
    }

    return (
        <>
            <HeaderTitle title={"Registration"} />
            <AccountField label={"Name"} value={name} onChange={setName}/>
            <EmailField value={email} setValue={setEmail} setValid={setEmailValid}/>
            <PasswordWithRules value={password} onChange={setPassword} setValid={setPasswordValid}/>
            <ConfirmPasswordField
                password={password}
                value={confirmPassword}
                setValue={setConfirmPassword}
                setValid={setIsValid}/>
            <FormButton label={"Register"} onClick={handleRegister} disabled={!isEmailValid || !isPasswordValid || !isValid}/>
            <div className={"mt-4 w-full flex justify-center"}>
                <span>{"Already registered? "}<TextLink href={"/account/login"} text={"Log in"}/></span>
            </div>
        </>
    );
};

export default Register;