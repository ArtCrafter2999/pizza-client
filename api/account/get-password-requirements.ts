import {apiEndpoint} from "@/api/defaults";
import {defaultRequirements, PasswordRequirements} from "@/api/account/models/password-requirements";

const url = apiEndpoint+"/passwordRequirements"
const options: RequestInit = {
    method: "GET",
    headers: {
        accept: "application/json",
    }
}

export async function getPasswordRequirements(): Promise<PasswordRequirements> {
    return await fetch(url, options)
                    .then(res => res.json())
                    .catch(() => Promise.resolve(defaultRequirements));
}