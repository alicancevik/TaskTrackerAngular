import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';
import { TaskLog } from 'src/app/models/task-log';
import { ApplicationTaskService } from 'src/app/services/application-task.service';
import { TaskLogService } from 'src/app/services/task-log.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  taskDetail: Task = new Task();
  
  taskLogs: TaskLog[] = [];

  constructor(private taskService: ApplicationTaskService, private taskLogService: TaskLogService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.getTaskDetail();

  }

  getTaskDetail() {
    let taskId = parseInt(this.route.snapshot.paramMap.get('id'));

    this.taskService.getById(taskId).subscribe(data => {
      this.taskDetail = data;
      this.taskLogService.getTaskLogsByTaskId(taskId).subscribe(data => {
        this.taskLogs = data;
      });

    });
  }

}
