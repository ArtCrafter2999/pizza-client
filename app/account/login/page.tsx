'use client'
import React, { useState } from 'react';
import Link from "next/link";
import HeaderTitle from "@/app/account/(FormComponents)/HeaderTitle";
import AccountField from "@/app/account/(FormComponents)/AccountField";
import TextLink from "@/app/account/(FormComponents)/TextLink";
import FormButton from "@/app/account/(FormComponents)/FormButton";
import { useRouter } from "next/navigation";
import { login } from "@/api/account/login";
import EmailField from "@/app/account/(FormComponents)/EmailField";
import { ApiException } from "@/api/defaults/api-exception";
import ErrorPanel, { useError } from "@/app/account/(FormComponents)/ErrorPanel";
import Loading, { useLoading } from "@/app/account/(FormComponents)/Loading";

const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [isEmailValid, setEmailValid] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const router = useRouter();
    const {error, catchError} = useError();
    const {isLoading, loading} = useLoading();

    function handleLogin() {
        catchError(
            loading(
                login({ email, password })
                    .then(() => router.push("/"))
            )
        )
    }

    return (
        <>
            <HeaderTitle title={"Log in"}/>
            <ErrorPanel error={error}/>
            <EmailField value={email} setValue={setEmail} setValid={setEmailValid}/>
            <AccountField label={"Password"} type="password" value={password} onChange={setPassword}/>
            <TextLink href={"/account/forgot-password"} text={"Forgot password?"}/>
            <FormButton label={"Log in"} onClick={handleLogin} disabled={!isEmailValid || !password}/>
            <Loading isLoading={isLoading}/>
            <div className={"mt-4 w-full flex justify-center"}>
                <span>{"Haven't registered yet? "}<TextLink href={"/account/register"} text={"Register now"}/></span>
            </div>
        </>
    );
};

export default Login;