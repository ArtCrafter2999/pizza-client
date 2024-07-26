import {apiEndpoint} from "@/api/defaults";
import {ConfirmEmailModel} from "@/api/account/models/confirm-email-model";

const url = apiEndpoint+"/confirm-email";
const options: RequestInit = {
    method: "POST",
    headers: {
        contentType: "application/json",
    }
}

export async function confirmEmail(model: ConfirmEmailModel): Promise<boolean> {
    return await fetch(url, {body: JSON.stringify(model), ...options})
        .then(res => res.ok)
        .catch(() => false);
}