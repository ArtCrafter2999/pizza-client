'use client'
import React, {useState} from 'react';
import Link from "next/link";
import HeaderTitle from "@/app/account/FormComponents/HeaderTitle";
import AccountField from "@/app/account/FormComponents/AccountField";
import TextLink from "@/app/account/FormComponents/TextLink";
import FormButton from "@/app/account/FormComponents/FormButton";
import {useRouter} from "next/navigation";
import {login} from "@/api/account/login";
import EmailField from "@/app/account/FormComponents/EmailField";

const Login = () => {
    const [email, setEmail] = useState<string>("")
    const [isEmailValid, setEmailValid] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const router = useRouter();

    function handleLogin() {
        login({email, password}).then(r => r && router.push("/"));
    }

    return (
        <>
            <HeaderTitle title={"Log in"}/>
            <EmailField value={email} setValue={setEmail} setValid={setEmailValid}/>
            <AccountField label={"Password"} type="password" value={password} onChange={setPassword}/>
            <TextLink href={"/account/forgot-password"} text={"Forgot password?"}/>
            <FormButton label={"Log in"} onClick={handleLogin} disabled={isEmailValid}/>
            <div className={"mt-4 w-full flex justify-center"}>
                <span>{"Haven't registered yet? "}<TextLink href={"/account/register"} text={"Register now"}/></span>
            </div>
        </>
    );
};

export default Login;