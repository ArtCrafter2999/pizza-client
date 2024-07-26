import {LoginModel} from "@/api/account/models/login-model";

export interface RegisterModel extends LoginModel {
    name: string;
}