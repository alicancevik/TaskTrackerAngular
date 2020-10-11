import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[
    AuthService
  ]
})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean = false;
  user:string = "";

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn=false;
    
  }

  login(){
    console.log("clicked login");
    this.authService.login();
    this.isLoggedIn=true;
    this.user = this.authService.activeUser;
  }

  profile(){
    console.log("profile!");
  }

  logout(){
    this.authService.logout();
    this.isLoggedIn=false;
    this.user="";
  }

}
