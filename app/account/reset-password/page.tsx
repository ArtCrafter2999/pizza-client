'use client'
import React, {useLayoutEffect, useState } from 'react';
import HeaderTitle from "@/app/account/(FormComponents)/HeaderTitle";
import FormButton from "@/app/account/(FormComponents)/FormButton";
import PasswordWithRules from "@/app/account/(FormComponents)/PasswordWithRules";
import { resetPassword } from "@/api/account/reset-password";
import { useRouter, useSearchParams } from "next/navigation";
import ConfirmPasswordField from "@/app/account/(FormComponents)/ConfirmPasswordField";
import Link from "next/link";
import ErrorPanel, { useError } from "@/app/account/(FormComponents)/ErrorPanel";
import Loading, { useLoading } from "@/app/account/(FormComponents)/Loading";

const ResetPasswordPage = () => {
    const [password, setPassword] = useState<string>("");
    const [isPasswordValid, setPasswordValid] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [areMatch, setAreMatch] = useState<boolean>();
    const [completed, setCompleted] = useState<boolean>(false);
    const { isLoading, loading } = useLoading()
    const { error, catchError, setError} = useError()
    const params = useSearchParams()
    const code = params.get("code");
    const email = params.get("email");
    useLayoutEffect(() => {
        if(!code || !email){
            setError(new Error("Wrong url. Check that you pasted the whole url"))
        }
    }, [code, email, setError]);

    function handleResetPassword() {
        console.log("reset");
        if(!code || !email) return;
        catchError(
            loading(
                resetPassword({ resetCode: code, email, newPassword: password })
                    .then(() => setCompleted(true))
            )
        );
    }

    if(error)
        return (
            <>
                <HeaderTitle title={"Oops"}>Something went wrong</HeaderTitle>
                <ErrorPanel error={error} />
                <Link href={"/"}>
                    <FormButton color={"primary-border"} label={"Back to home"} />
                </Link>
            </>
        )
    if (!completed)
        return (
            <>
                <HeaderTitle title={"Reset Password"}>
                    Create new password
                </HeaderTitle>
                <PasswordWithRules value={password} onChange={setPassword} setValid={setPasswordValid} />
                <ConfirmPasswordField
                    password={password}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    setValid={setAreMatch} />
                <FormButton onClick={handleResetPassword} disabled={!isPasswordValid || !areMatch} />
                <Loading isLoading={isLoading}/>
            </>
        );
    if (completed)
        return (
            <>
                <HeaderTitle title={"Great"}>Your password has been changed</HeaderTitle>
                <Link href={"/"}>
                    <FormButton label={"Back to home"} />
                </Link>
            </>
        );
};

export default ResetPasswordPage;