import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskStatus } from '../models/task-status';
import { TaskStatusService } from '../services/task-status.service';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.css']
})
export class TaskStatusComponent implements OnInit {

  taskStatuses:TaskStatus[] = [];
  
  taskStatusAddForm = new FormGroup({
    title: new FormControl('', Validators.required),
  });

  constructor(private taskStatusService:TaskStatusService, private router:Router) { }

  ngOnInit(): void {
    this.getTaskStatuses();
  }

  getTaskStatuses(){
    this.taskStatusService.getTaskStatuses().subscribe(result=>{
      this.taskStatuses = result;
    });
  }

  taskStatusAddSubmit(){
    if(!this.taskStatusAddForm.valid){
      alert("Gerekli alanları doldurmanız gerekmektedir!");
      return;
    }

    this.taskStatusService.add(this.taskStatusAddForm.value.title);
    window.location.reload();
  }

}
