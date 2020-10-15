import { Component, OnInit } from '@angular/core';
import { TaskLog } from '../models/task-log';
import { TaskLogService } from '../services/task-log.service';

@Component({
  selector: 'app-task-log',
  templateUrl: './task-log.component.html',
  styleUrls: ['./task-log.component.css']
})
export class TaskLogComponent implements OnInit {

  taskLogs : TaskLog[] = [];

  constructor(private taskLogService:TaskLogService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.taskLogService.getTaskLogs().subscribe(data=>{
      this.taskLogs = data;
    });
  }

}
