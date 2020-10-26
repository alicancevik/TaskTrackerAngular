import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { ApplicationTaskService } from '../services/application-task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks:Task[]= [];
  

  constructor(private applicationTaskService:ApplicationTaskService) { }

  ngOnInit(): void {
    this.tasks = [];
    // this.generateTasks();
    this.getAllTasks();
  }

  generateTasks(){
    let task1:Task = new Task();
    task1.id = 1;
    task1.title = "Task 1 Title";
    task1.shortDescription = "Task 1 Short Description";
    task1.fullDescription = "Task 1 Full Description";
    task1.createDate = new Date();

    let task2:Task = new Task();
    task2.id = 2;
    task2.title = "Task 2 Title";
    task2.shortDescription = "Task 2 Short Description";
    task2.fullDescription = "Task 2 Full Description";
    task2.createDate = new Date();

    let task3:Task = new Task();
    task3.id = 3;
    task3.title = "Task 3 Title";
    task3.shortDescription = "Task 3 Short Description";
    task3.fullDescription = "Task 3 Full Description";
    task3.createDate = new Date();

    let task4:Task = new Task();
    task4.id = 4;
    task4.title = "Task 4 Title";
    task4.shortDescription = "Task 4 Short Description";
    task4.fullDescription = "Task 4 Full Description";
    task4.createDate = new Date();

    this.tasks.push(task1);
    this.tasks.push(task2);
    this.tasks.push(task3);
    this.tasks.push(task4);
  }

  getAllTasks(){
    
    this.applicationTaskService.getAll().subscribe(data=> {
      this.tasks = data;
    });
  }

}
