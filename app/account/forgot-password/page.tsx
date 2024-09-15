'use client'
import React, {useState} from 'react';
import HeaderTitle from "@/app/account/(FormComponents)/HeaderTitle";
import FormButton from "@/app/account/(FormComponents)/FormButton";
import {forgotPassword} from "@/api/account/forgot-password";
import Link from "next/link";
import EmailField from "@/app/account/(FormComponents)/EmailField";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState<string>("");
    const [isConfirmed, setConfirmed] = useState<boolean>(false);
    const [isEmailValid, setEmailValid] = useState<boolean>(false);

    function handleForgotPassword() {
        forgotPassword(email).finally(() =>
            setConfirmed(true)
        );
    }

    if (isConfirmed)
        return (
            <>
                <HeaderTitle title={"Email Sended"}>
                    Check out your mailbox
                </HeaderTitle>
                <Link href={"/account/login"}>
                    <FormButton label={"Back to login"} color={"primary-border"}/>
                </Link>
            </>
        )

    return (
        <>
            <HeaderTitle title={"Forgot Password"}>
                Type your email to send send password recovery link
            </HeaderTitle>
            <EmailField value={email} setValue={setEmail} setValid={setEmailValid}/>
            <FormButton onClick={handleForgotPassword} disabled={!isEmailValid}/>
        </>
    );
};

export default ForgotPasswordPage;