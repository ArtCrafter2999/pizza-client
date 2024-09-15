import {post} from "@/api/defaults/post";

const url = "/Account/resendConfirmationEmail"

export function resendEmail(email: string): Promise<void> {
    return post(url, {email});
}