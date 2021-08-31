export interface AuthResponse {
    ok?: boolean;
    userId?: string;
    roles?: string;
    name?: string;
    email?: string;
    token?: string;
    msg?: string;
}

export interface User {
    userId: string;
    name: string;
    email?: string;
}