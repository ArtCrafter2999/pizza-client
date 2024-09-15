import {refresh} from "@/api/account/refresh";
import {ApiException} from "@/api/defaults/api-exception";
import {ProblemDetails} from "@/api/defaults/problem-details";
import {Request} from "@/api/defaults/request";
import {sendRequest} from "@/api/defaults/sendRequest";

export async function processResponse(response: Response, request: Request): Promise<any> {
    const status = response.status;
    let _headers: any = {};
    if (response.headers && response.headers.forEach) {
        response.headers.forEach((v: any, k: any) => _headers[k] = v);
    }
    if (status === 200) {
        const _responseText = await response.text();
        return JSON.parse(_responseText);
    } else if (status === 201) {
        return response.text();
    } else if (status === 204) {
        return Promise.resolve<any>(null);
    } else if (status === 400) {
        const _responseText_1 = await response.text();
        throw new ApiException(
            "Bad Request",
            status, _responseText_1, _headers,
            JSON.parse(_responseText_1) as ProblemDetails);
    } else if (status === 401) {
        await refresh()
        return sendRequest(request.url, request.options, request.body);
    } else if (status === 403) {
        const _responseText_2 = await response.text();
        throw new ApiException(
            "Forbidden",
            status, _responseText_2, _headers,
            JSON.parse(_responseText_2) as ProblemDetails);
    } else if (status === 500) {
        const _responseText_3 = await response.text();
        throw new ApiException(
            "Server error",
            status, _responseText_3, _headers,
            JSON.parse(_responseText_3) as ProblemDetails);
    } else {
        const _responseText_4 = await response.text();
        throw new ApiException(
            "An unexpected server error (" + status + ") occurred.",
            status, _responseText_4, _headers,
            JSON.parse(_responseText_4) as ProblemDetails);
    }
}