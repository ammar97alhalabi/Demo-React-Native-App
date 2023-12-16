export class UserModel{
  email:    string;
  password: string;
  constructor(email:string,password:string){
    this.email=email
    this.password=password
  }
}
// To parse this data:
//
//   import { Convert, LoginRequest } from "./file";
//
//   const loginRequest = Convert.toLoginRequest(json);

export interface LoginRequest {
  email:    string;
  password: string;
}

// Converts JSON strings to/from your types
export class ConvertLoginRequest {
  public static toLoginRequest(json: string): LoginRequest {
      return JSON.parse(json);
  }

  public static loginRequestToJson(value: LoginRequest): string {
      return JSON.stringify(value);
  }
}


