import { LoginRequest, UserModel } from "../../interfaces/models/LoginRequest";
import { AuthServiceImp } from "../../repository/service/AuthServiceImp";


class UserViewModel {
authService:AuthServiceImp=new AuthServiceImp()
request?:LoginRequest
valid:boolean=true

async login(email:string,password:string){
 
  await this.authService.loginApi(new UserModel(email,password)).then(response=>{
    console.log(response)
    this.request=response
    this.valid=true
  }).catch(error=>{ 
    this.valid=false;
  })
}

}

export default UserViewModel;