import {sendRequest} from "@/api/defaults/sendRequest";

const putOptions: RequestInit = {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
} as const

export async function patch(url: string, body?: object, options: RequestInit = {}) {
    return await sendRequest(url, {...putOptions, ...options}, body)
}