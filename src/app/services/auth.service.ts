import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AccessLoginDto } from '../models/access-login-dto';
import { AccessTokenDto } from '../models/access-token-dto';
import { map } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<AccessTokenDto>;
  public currentUser: Observable<AccessTokenDto>;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.currentUserSubject = new BehaviorSubject<AccessTokenDto>(JSON.parse(localStorage.getItem('access-token')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AccessTokenDto {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    let accessLoginDto: AccessLoginDto = new AccessLoginDto();
    accessLoginDto.userName = "alicancevik";
    accessLoginDto.password = "1234";

    return this.http.post<any>("http://localhost:59749/api/users/login", accessLoginDto)
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.localStorageService.set('access-token', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('access-token');
    this.currentUserSubject.next(null);
  }









}
