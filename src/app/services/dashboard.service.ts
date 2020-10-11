import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Dashboard } from '../models/dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  dashboardDetails:Dashboard;

  path: string = "http://localhost:59749/api/dashboards/";

  constructor(private http: HttpClient) { }

  getDashboardDetails(){
    return this.http.get<Dashboard>(this.path);
  }

}
