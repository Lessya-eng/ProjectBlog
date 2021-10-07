export interface IActivationPayload {
    uid: string;
    token: string;
}
export interface IUserAuth {
    username: string;
    password: string;
    email: string;
}
export interface IUserLoginAuth {
    password_login: string;
    email_login: string;
}
export interface ITokens {
    refresh: string;
    access: string;
}

export  interface IProfile {
    username: string | null,
    id: number | null,
    email: string | null,
}
