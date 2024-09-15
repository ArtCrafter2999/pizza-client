import {sendRequest} from "@/api/defaults/sendRequest";

const getOptions: RequestInit = {
    method: "GET",
    headers: {
        "Accept": "application/json",
    },
} as const

export async function get(url: string, body?: object, options: RequestInit = {}) {
    return await sendRequest(url, {...getOptions, ...options}, body)
}