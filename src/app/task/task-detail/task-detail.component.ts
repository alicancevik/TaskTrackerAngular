import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task, TaskStatusUpdateDto } from 'src/app/models/task';
import { TaskLog } from 'src/app/models/task-log';
import { TaskStatus } from 'src/app/models/task-status';
import { ApplicationTaskService } from 'src/app/services/application-task.service';
import { TaskLogService } from 'src/app/services/task-log.service';
import { TaskStatusService } from 'src/app/services/task-status.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  selectedStatus: string = "0";

  taskDetail: Task = new Task();

  taskLogs: TaskLog[] = [];

  taskStatuses: TaskStatus[] = [];

  constructor(private taskService: ApplicationTaskService, private taskLogService: TaskLogService, private taskStatusService:TaskStatusService , public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTaskDetail();
    this.getTaskStatuses();
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

  getTaskStatuses(){
    this.taskStatusService.getTaskStatuses().subscribe(data=>{
      this.taskStatuses = data;
    });
  }

  changeStatus(){
    if((this.selectedStatus && parseInt(this.selectedStatus) > 0 ) && this.taskDetail)
    {
      let taskStatusUpdate: TaskStatusUpdateDto = new TaskStatusUpdateDto();
      taskStatusUpdate.statusId = parseInt(this.selectedStatus);  
      taskStatusUpdate.taskId = this.taskDetail.id;  

      this.taskService.changeStatus(taskStatusUpdate);

      location.reload(); // page refresh for status change
    }
  }

}
