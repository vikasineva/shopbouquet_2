import AuthResponse from "../components/Auth/interfaces/AuthResponse";
import ILoginRequest from "../components/Auth/interfaces/ILoginRequest";
import IRegisterRequest from "../components/Auth/interfaces/IRegisterRequest";
import axiosInstance from "./Axios";

class Auth {
    static register = async (registerRequest: IRegisterRequest): Promise<AuthResponse> => {
        let response: AuthResponse = {}

        await axiosInstance.post<AuthResponse>(
            `/auth/register`,
            registerRequest
        ).then(res => { response = res.data })
            .catch(err => response.error = err.response.data);

        return response;
    };

    static login = async (loginRequest: ILoginRequest): Promise<AuthResponse> => {
        let response: AuthResponse = {}

        await axiosInstance.post<AuthResponse>(
            `/auth/authenticate`,
            loginRequest
        ).then(res => { response = res.data })
            .catch(err => response.error = err.response.data);

        return response;
    };
}

export default Auth;