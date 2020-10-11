import { Component, Input, OnInit } from '@angular/core';
import { ApplicationUser } from '../models/application-user';
import { TaskLog } from '../models/task-log';

@Component({
  selector: 'app-dashboard-users-widget',
  templateUrl: './dashboard-users-widget.component.html',
  styleUrls: ['./dashboard-users-widget.component.css']
})
export class DashboardUsersWidgetComponent implements OnInit {

  @Input() LastApplicationUsers:ApplicationUser[];
  @Input() LastTaskLogs:TaskLog[];

  constructor() { }

  ngOnInit(): void {
   
  }

}
