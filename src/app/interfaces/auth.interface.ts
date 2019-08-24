export interface AuthI {
    email: string;
    password: string;
}

export interface LoginResponseI {
    success: boolean;
    token: string;
}