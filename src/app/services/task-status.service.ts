import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskStatus } from '../models/task-status';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusService {

  path: string = "http://localhost:59749/api/taskstatuses/";

  constructor(private http:HttpClient,private router:Router) { }

  getTaskStatuses() : Observable<TaskStatus[]>{
    return this.http.get<TaskStatus[]>(this.path);
  }

  add(name:string){
    let taskStatus:TaskStatus = new TaskStatus();
    taskStatus.title = name;
    this.http.post(this.path + "add",taskStatus).subscribe(d=>{
      this.router.navigate(['/taskstatuses']);
      
    });
  }

}
