import { parseJwt } from './../utils/auth';
import { makeAutoObservable } from 'mobx';
import ILoginRequest from '../components/Auth/interfaces/ILoginRequest';
import Auth from '../api/Auth';
import IRegisterRequest from '../components/Auth/interfaces/IRegisterRequest';
import AuthResponse from '../components/Auth/interfaces/AuthResponse';

class User {
    isAuthorized: boolean = false;
    jwtToken?: string;
    //profile?: IPersonInfo;

    constructor() {
        makeAutoObservable(this);
        this.jwtToken = localStorage.getItem('token') || "";

        if (this.jwtToken) {
            this.isAuthorized = true;
            const parsedToken = parseJwt(this.jwtToken);
            console.log(parsedToken);
        }
    }

    setToken(token: string): void {
        this.jwtToken = token;
        localStorage.setItem('token', token);
    }

    async login(credentials: ILoginRequest): Promise<AuthResponse> {
        const response = await Auth.login(credentials);

        if (response?.accessToken) {
            const parsedToken = parseJwt(response.accessToken);

            this.setToken(response.accessToken);
            this.isAuthorized = true;
        }

        return response;
    }


    async register(registerData: IRegisterRequest): Promise<AuthResponse> {
        const response = await Auth.register(registerData);

        if (response?.accessToken) {
            const parsedToken = parseJwt(response.accessToken);

            this.setToken(response.accessToken);
            this.isAuthorized = true;
        }

        return response;
    }

    signOut(): void {
        this.jwtToken = "";
        this.isAuthorized = false;
        localStorage.removeItem('token');
    }

    /*
    async getProfile(): Promise<IPersonInfo> {
        if (!this.profile) {
            this.profile = await AuthService.GetProfile();
        }

        return this.profile;
    }
    */

    /*
    async updateProfile(updatedProfile: IProfileRequest) {
        let needUpdate: boolean = false;

        for (let prop in updatedProfile) {
            if (this.profile![prop as keyof IPersonInfo] !== updatedProfile[prop as keyof IProfileRequest]) {
                needUpdate = true;
            }
        }

        if (needUpdate) {
            let responseProfile: IPersonInfo = await AuthService.UpdateProfile(updatedProfile);
            this.profile = responseProfile;
        }
    }
    */
}

export default new User();
