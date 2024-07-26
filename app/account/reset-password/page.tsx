'use client'
import React, {useState} from 'react';
import HeaderTitle from "@/app/account/FormComponents/HeaderTitle";
import AccountField from "@/app/account/FormComponents/AccountField";
import FormButton from "@/app/account/FormComponents/FormButton";
import PasswordWithRules from "@/app/account/FormComponents/PasswordWithRules";
import {register} from "@/api/account/register";
import {resetPassword} from "@/api/account/reset-password";
import {useRouter} from "next/navigation";
import ConfirmPasswordField from "@/app/account/FormComponents/ConfirmPasswordField";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import Link from "next/link";

type QueryParams = {
    code: string;
    email: string;
}

const ResetPasswordPage = ({code, email}: QueryParams) => {
    const [password, setPassword] = useState<string>("");
    const [isPasswordValid, setPasswordValid] = useState<boolean>(false);
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [areMatch, setAreMatch] = useState<boolean>();
    const [completed, setCompleted] = useState<"none" | "ok" | "error">("none");
    const router = useRouter();


    function handleResetPassword() {
        console.log("reset");
        resetPassword({resetCode: code, email, newPassword: password})
            .then(r => setCompleted(r ? "ok" : "error"))
            .finally(() => setCompleted("ok")); // todo: remove
    }

    if (completed === "none")
        return (
            <>
                <HeaderTitle title={"Reset Password"}>
                    Create new password
                </HeaderTitle>
                <PasswordWithRules value={password} onChange={setPassword} setValid={setPasswordValid}/>
                <ConfirmPasswordField
                    password={password}
                    value={confirmPassword}
                    setValue={setConfirmPassword}
                    setValid={setAreMatch}/>
                <FormButton onClick={handleResetPassword} disabled={!isPasswordValid || !areMatch}/>
            </>
        );
    if (completed === "ok")
        return (
          <>
              <HeaderTitle title={"Great"}>Your password has been changed</HeaderTitle>
              <Link href={"/"}>
                  <FormButton label={"Back to home"}/>
              </Link>
          </>
        );
    return (
        <>
            <HeaderTitle title={"Oops"}>Something went wrong</HeaderTitle>
            <Link href={"/"}>
                <FormButton color={"primary-border"} label={"Back to home"}/>
            </Link>
        </>
    )
};

export default ResetPasswordPage;