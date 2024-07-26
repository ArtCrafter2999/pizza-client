import {apiEndpoint} from "@/api/defaults";
import {LoginModel} from "@/api/account/models/login-model";

const url = apiEndpoint+"/forgotPassword";
const options: RequestInit = {
    method: "POST",
    headers: {
        contentType: "application/json",
    }
}

export async function forgotPassword(email: string): Promise<boolean> {
    return await fetch(url, {body: JSON.stringify({email}), ...options})
        .then(res => res.ok)
        .catch(() => false);
}