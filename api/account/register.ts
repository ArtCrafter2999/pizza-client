import {RegisterModel} from "@/api/account/models/register-model";
import {post} from "@/api/defaults/post";

const url = "/Account/register"

export function register(model: RegisterModel): Promise<void> {
    return post(url, model);
}