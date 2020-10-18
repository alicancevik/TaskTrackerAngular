import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskStatus } from '../models/task-status';

@Injectable({
  providedIn: 'root'
})
export class TaskStatusService {

  path: string = "http://localhost:59749/api/taskstatuses/";

  constructor(private http:HttpClient) { }

  getTaskStatuses() : Observable<TaskStatus[]>{
    return this.http.get<TaskStatus[]>(this.path);
  }

}
