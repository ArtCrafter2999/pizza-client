import {apiEndpoint} from "@/api/defaults";
import {ResetPasswordModel} from "@/api/account/models/reset-password-model";

const url = apiEndpoint+"/resetPassword"
const options: RequestInit = {
    method: "POST",
    headers: {
        contentType: "application/json",
    }
}

export async function resetPassword(model: ResetPasswordModel): Promise<boolean> {
    return await fetch(url, {body: JSON.stringify(model), ...options})
        .then(res => res.ok)
        .catch(() => false);
}