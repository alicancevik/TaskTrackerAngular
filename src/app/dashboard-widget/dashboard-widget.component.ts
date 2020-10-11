import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-widget',
  templateUrl: './dashboard-widget.component.html',
  styleUrls: ['./dashboard-widget.component.css']
})
export class DashboardWidgetComponent implements OnInit {

  @Input() TotalTask:string;
  @Input() InProgressTask:number;
  @Input() DoneTask:number;
  @Input() CancelledTask:number;

  constructor() { }

  ngOnInit(): void {
  }

}
