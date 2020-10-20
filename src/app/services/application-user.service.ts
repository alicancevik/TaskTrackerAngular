import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApplicationUser } from '../models/application-user';
import { AccessLoginDto } from '../models/access-login-dto';
import { Router } from '@angular/router';
import { AccessTokenDto } from '../models/access-token-dto';

@Injectable({
  providedIn: 'root'
})
export class ApplicationUserService {

  path: string = "http://localhost:59749/api/users/";

  constructor(private http: HttpClient, private router:Router) { }

  getUsers(): Observable<ApplicationUser[]> {
    return this.http.get<ApplicationUser[]>(this.path);
  }

  getUserDetail(userId: number) {
    return this.http.get<ApplicationUser>(this.path + userId);
  }

  login(accessLoginDto:AccessLoginDto){
    this.http.post<AccessTokenDto>(this.path + "login",accessLoginDto).subscribe(d=>{
      localStorage.setItem("access-token",d.toString());
      this.router.navigateByUrl("/dashboard");
    });
  }

}
