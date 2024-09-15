import React from 'react';
import {confirmEmail} from "@/api/account/confirm-email";
import {ConfirmEmailModel} from "@/api/account/models/confirm-email-model";
import HeaderTitle from "@/app/account/(FormComponents)/HeaderTitle";
import FormButton from "@/app/account/(FormComponents)/FormButton";
import Link from "next/link";
import {ApiException} from "@/api/defaults/api-exception";
import ErrorPanel from "@/app/account/(FormComponents)/ErrorPanel";

const ConfirmEmailPage = async ({searchParams}: { searchParams: ConfirmEmailModel }) => {
    console.log(searchParams)
    try {
        await confirmEmail(searchParams);
        return (
            <>
                <HeaderTitle title={"Congratulations"}>Your email have been confirmed</HeaderTitle>
                <Link href={"/"}>
                    <FormButton label={"Back to home"}/>
                </Link>
            </>
        );
    } catch (e: unknown) {
        const apiError = e as ApiException;
        return (
            <>
                <HeaderTitle title={"Oops"}>Something went wrong</HeaderTitle>
                <ErrorPanel error={apiError}/>
                <Link href={"/"}>
                    <FormButton color={"primary-border"} label={"Back to home"}/>
                </Link>
            </>
        );
    }
};

export default ConfirmEmailPage;