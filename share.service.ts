//import{HttpModule} from '@angular/http';
import {HttpClientModule,HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators';
import { element } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor(private httpClient:HttpClient) { }

  public login(userName:string,password:string){
    const url ="http://localhost:4010/oauth/token?username="+userName+"&password="+password+"&grant_type=password";
    return this.httpClient.post<any>(url,"") ;
    
   }


   public getRole()
   {
     return this.httpClient.get<string[]>("http://localhost:4010/user/roles").pipe(
map((roles:string[])=>  {

 var altRoles:string[]=[];
 roles.forEach(element=>{
   altRoles.push(element.replace("ROLE_"," "));
 });
 return altRoles;

}    )


     );
   }

public verifytoken()
{
  return this.httpClient.get("http://localhost:4010/test");
}











}
