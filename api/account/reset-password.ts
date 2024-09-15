import {ResetPasswordModel} from "@/api/account/models/reset-password-model";
import {post} from "@/api/defaults/post";

const url = "/Account/resetPassword"

export function resetPassword(model: ResetPasswordModel): Promise<void> {
    return post(url, model);
}