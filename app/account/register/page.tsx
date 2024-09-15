'use client'
import React, { useState } from 'react';
import PasswordWithRules from "@/app/account/(FormComponents)/PasswordWithRules";
import AccountField from "@/app/account/(FormComponents)/AccountField";
import HeaderTitle from "@/app/account/(FormComponents)/HeaderTitle";
import FormButton from "@/app/account/(FormComponents)/FormButton";
import TextLink from "@/app/account/(FormComponents)/TextLink";
import { register } from "@/api/account/register";
import { useRouter } from "next/navigation";
import EmailField from "@/app/account/(FormComponents)/EmailField";
import ConfirmPasswordField from "@/app/account/(FormComponents)/ConfirmPasswordField";
import ErrorPanel, { useError } from "@/app/account/(FormComponents)/ErrorPanel";
import Loading, { useLoading } from "@/app/account/(FormComponents)/Loading";

const Register = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [isEmailValid, setEmailValid] = useState<boolean>(false);
    const [isPasswordValid, setPasswordValid] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>();
    const router = useRouter();
    const { error, catchError} = useError()
    const { isLoading, loading } = useLoading()

    function handleRegister() {
        catchError(
            loading(
                register({ name, email, password })
                    .then(() => router.push("/"))
            )
        );
    }

    return (
        <>
            <HeaderTitle title={"Registration"}/>
            <ErrorPanel error={error}/>
            <AccountField label={"Name"} value={name} onChange={setName}/>
            <EmailField value={email} setValue={setEmail} setValid={setEmailValid}/>
            <PasswordWithRules value={password} onChange={setPassword} setValid={setPasswordValid}/>
            <ConfirmPasswordField
                password={password}
                value={confirmPassword}
                setValue={setConfirmPassword}
                setValid={setIsValid}/>
            <FormButton label={"Register"} onClick={handleRegister}
                        disabled={!isEmailValid || !isPasswordValid || !isValid}/>
            <Loading isLoading={isLoading}/>
            <div className={"mt-4 w-full flex justify-center"}>
                <span>{"Already registered? "}<TextLink href={"/account/login"} text={"Log in"}/></span>
            </div>
        </>
    );
};

export default Register;