import { ConvertLoginRequest, LoginRequest, UserModel } from "../../interfaces/models/LoginRequest";
import { ApiEndPoints } from "../remote/network/ApiEndPoints";
import { NetworkApiService } from "../remote/network/NetworkApiService";
import { AuthService } from "./AuthService";

export class AuthServiceImp implements AuthService {
    networkApiService: NetworkApiService = new NetworkApiService()
    async loginApi(user: UserModel) {
        try {
            let info: LoginRequest = {
                email: user.email,
                password: user.password
            }
            return await this.networkApiService.postApiResponse(new ApiEndPoints().login, ConvertLoginRequest.loginRequestToJson(info),new Headers({'content-type':'application/json'}));

        } catch (error) {
            throw error
        }
    }

}