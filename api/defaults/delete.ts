import {sendRequest} from "@/api/defaults/sendRequest";

const putOptions: RequestInit = {
    method: "DELETE",
    headers: {
        "Content-Type": "application/json"
    },
} as const

export async function sendDelete(url: string, body?: object, options: RequestInit = {}) {
    return await sendRequest(url, {...putOptions, ...options}, body)
}