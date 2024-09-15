import {ConfirmEmailModel} from "@/api/account/models/confirm-email-model";
import {post} from "@/api/defaults/post";

const url = "/Account/confirmEmail";

export function confirmEmail(model: ConfirmEmailModel): Promise<void> {
    return post(url, model)
}