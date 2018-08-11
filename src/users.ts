import { Repo } from "./repo";

export class User{
Login:string;
FullName:string;
repoCount:string;
repos? : Repo[];

constructor(userInfo:any){
this.Login=userInfo.login;
this.FullName=userInfo.name;
this.repoCount=userInfo.public_repos;
// this.repos=userInfo.

}
}