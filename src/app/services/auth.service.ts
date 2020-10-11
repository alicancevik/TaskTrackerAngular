import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  activeUser:string = "";
  isLogged: boolean = false;

  constructor() { }

  login(){
    this.isLogged = true;
    this.activeUser = "admin";
  }

  logout(){
    this.isLogged=false;
    this.activeUser="";
  }

  isLoggedIn():boolean {
    return this.isLogged;
  }
}
