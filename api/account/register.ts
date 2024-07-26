import {apiEndpoint} from "@/api/defaults";
import {RegisterModel} from "@/api/account/models/register-model";

const url = apiEndpoint+"/register"
const options: RequestInit = {
    method: "POST",
    headers: {
        contentType: "application/json",
    }
}

export async function register(model: RegisterModel): Promise<boolean> {
    return await fetch(url, {body: JSON.stringify(model), ...options})
        .then(res => res.ok)
        .catch(() => false);
}