import {defaultRequirements, PasswordRequirements} from "@/api/account/models/password-requirements";
import {get} from "@/api/defaults/get";

const url = "/Account/passwordRequirements"

export async function getPasswordRequirements(): Promise<PasswordRequirements> {
    try {
        return await get(url);
    } catch (e) {
        console.error(e);
        return defaultRequirements;
    }
}