import {apiEndpoint} from "@/api/defaults";
import {LoginModel} from "@/api/account/models/login-model";

const url = apiEndpoint+"/login"
const options: RequestInit = {
    method: "POST",
    headers: {
        contentType: "application/json",
    }
}

export async function login(model: LoginModel): Promise<boolean> {
    const urlWithQuery = url + "?useCookies=true"
    return await fetch(urlWithQuery, {body: JSON.stringify(model), ...options})
        .then(res => res.ok)
        .catch(() => false);
}