export interface Request {
    url: string;
    options: RequestInit;
    body?: object;
}