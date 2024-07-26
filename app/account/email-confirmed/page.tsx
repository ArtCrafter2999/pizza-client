import React from 'react';
import {confirmEmail} from "@/api/account/confirm-email";
import {ConfirmEmailModel} from "@/api/account/models/confirm-email-model";
import HeaderTitle from "@/app/account/FormComponents/HeaderTitle";
import FormButton from "@/app/account/FormComponents/FormButton";
import Link from "next/link";

const ConfirmEmailPage = async (props: ConfirmEmailModel) => {
    const ok = await confirmEmail(props);

    if(ok)
        return (
            <>
                <HeaderTitle title={"Congratulations"}>Your email have been confirmed</HeaderTitle>
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
    );
};

export default ConfirmEmailPage;