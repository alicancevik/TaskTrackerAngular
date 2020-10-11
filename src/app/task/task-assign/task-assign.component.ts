import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task, TaskAssignDto } from 'src/app/models/task';
import { ApplicationTaskService } from 'src/app/services/application-task.service';

@Component({
  selector: 'app-task-assign',
  templateUrl: './task-assign.component.html',
  styleUrls: ['./task-assign.component.css']
})
export class TaskAssignComponent implements OnInit {

  @Input() ApplicationTask:Task;

  taskAssignForm = new FormGroup({
    TaskId: new FormControl('', Validators.required),
    UserId: new FormControl('', Validators.required),
  });


  constructor(private taskService:ApplicationTaskService) { }

  ngOnInit(): void {
  }

  taskAssignSubmit(){
    let task:TaskAssignDto = new TaskAssignDto();
    task.taskId = this.ApplicationTask.id;
    task.userId =  parseInt(this.taskAssignForm.value.UserId);
    this.taskService.assign(task);
  }

}
