import {LoginModel} from "@/api/account/models/login-model";
import {post} from "@/api/defaults/post";
import {generateQuery} from "@/api/generate-query";

const url = "/Account/login"

export function login(model: LoginModel): Promise<void> {
    return post(url + generateQuery({useCookies: true}), model);
}