import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApplicationUserGroup } from '../models/application-user-group';

@Injectable({
  providedIn: 'root'
})
export class ApplicationUserGroupService {

  path: string = "http://localhost:59749/api/usergroups/";

  constructor(private http: HttpClient) { }

  getUserGroups(): Observable<ApplicationUserGroup[]> {
    return this.http.get<ApplicationUserGroup[]>(this.path);
  }

  getUserGroupDetail(userGroupId: number) {
    return this.http.get<ApplicationUserGroup>(this.path + userGroupId);
  }

}
