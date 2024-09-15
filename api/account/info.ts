import {get} from "@/api/defaults/get";
import {InfoModel} from "@/api/account/models/infoModel";

const url = "/Account/info"

export function info(): Promise<InfoModel> {
    return get(url);
}