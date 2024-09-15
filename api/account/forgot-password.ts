import {post} from "@/api/defaults/post";

const url = "/Account/forgotPassword";

export function forgotPassword(email: string): Promise<void> {
    return post(url, {email})
}