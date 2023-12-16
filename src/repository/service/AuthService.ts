import { LoginRequest } from "../../interfaces/models/LoginRequest";


export interface AuthService{
      loginApi(loginRequest:LoginRequest):any ;
}