import { BaseService } from "./BaseService";

import { IUserAuth, IUserLoginAuth, IActivationPayload } from "../types/user";
class AuthAPIService extends BaseService {
    private storage: Storage;

    private contentType = {
        "Content-Type": "application/json",
    };

    constructor() {
        super();
        this.storage = localStorage;
    }

    public async registration(profile: IUserAuth) {
        return this.post("users/", profile);
    }

    public async activateUser(activationPayload: IActivationPayload) {
        return this.post("users/activation/", activationPayload);
    }
    public async login(profile: IUserLoginAuth) {
        return this.post("jwt/create/", { email: profile.email_login, password: profile.password_login });
    }

    public async getUsers() {
        return this.get("users/");
    }


    public async deleteUser(id: number) {
        return this.remove(`users/${id}`);
    }
}

export const AuthService = new AuthAPIService();