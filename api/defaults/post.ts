import {sendRequest} from "@/api/defaults/sendRequest";

const postOptions: RequestInit = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
} as const

export async function post(url: string, body?: object, options: RequestInit = {}) {
    return await sendRequest(url, {...postOptions, ...options}, body)
}