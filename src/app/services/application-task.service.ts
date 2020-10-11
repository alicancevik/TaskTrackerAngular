import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Task, TaskAddDto, TaskAssignDto } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class ApplicationTaskService {
  path: string = "http://localhost:59749/api/tasks/";

  constructor(private router:Router, private http: HttpClient) { }

  getAll() : Observable<Task[]> {

    return this.http.get<Task[]>(this.path);

  }

  getById(taskId:number){
    return this.http.get<Task>(this.path + taskId);
  }

  add(task:TaskAddDto){
    this.http.post(this.path + "add",task).subscribe(d=>{
      this.router.navigate(['/tasks']);
    });
  }

  assign(task:TaskAssignDto){
    this.http.put(this.path + "assign",task).subscribe(d=>{});
  }

}
