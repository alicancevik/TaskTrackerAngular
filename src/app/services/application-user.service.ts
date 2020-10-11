import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApplicationUser } from '../models/application-user';

@Injectable({
  providedIn: 'root'
})
export class ApplicationUserService {

  path: string = "http://localhost:59749/api/users/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ApplicationUser[]> {
    return this.http.get<ApplicationUser[]>(this.path);
  }

  getUserDetail(userId: number) {
    return this.http.get<ApplicationUser>(this.path + userId);
  }

}
