import {get} from "@/api/defaults/get";

const url = "/Account/refresh"

export function refresh() : Promise<void> {
    return get(url);
}