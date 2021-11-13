import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginserv:ShareService,
    private router:Router
    ) { }

  ngOnInit(): void {
var token=localStorage.getItem('token');
if(token!=null && token.length>0)
{
  this.loginserv.verifytoken().subscribe(
          (data)=>{ console.log(data);
    this.router.navigateByUrl("/home");    
      
    }
  )
  this.router.navigateByUrl("/home");
}
  
  }
  login(userName:string,password:string)
  {
    console.log(userName);
    console.log(password);
    this.loginserv.login(userName,password).subscribe(
      (data:any)=>{
      localStorage.setItem("token",data['access_token']);
      console.log(data);
      this.router.navigateByUrl("/home");
    },
    (data:any)=>{ console.log(data)}
    ) ;
    
    

  }
}
