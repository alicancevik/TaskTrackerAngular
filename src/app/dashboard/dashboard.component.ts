import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../models/dashboard';
import { DashboardService } from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  dashboardDetails:Dashboard;

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.getDashboardDetails();
  }

  getDashboardDetails(){
    this.dashboardService.getDashboardDetails().subscribe(data=> {
      this.dashboardDetails = data;
    });
  }

}
