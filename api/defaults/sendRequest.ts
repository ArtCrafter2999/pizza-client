import {processResponse} from "@/api/defaults/process-response";
import apiEndpoint from "@/api/defaults/api-endpoint";

const universalOptions: RequestInit = {
    credentials: "include",
}
export async function sendRequest(url: string, options: RequestInit, body?: object): Promise<any> {
    const sendUrl = url.startsWith("/") ? apiEndpoint + url : url;
    const sendBody = body ? {body: JSON.stringify(body)} : {}
    const response = await fetch(sendUrl, {...sendBody, ...universalOptions, ...options});
    return await processResponse(response, {url, options, body});
}