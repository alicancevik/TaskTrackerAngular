import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskLog } from '../models/task-log';

@Injectable({
  providedIn: 'root'
})
export class TaskLogService {

  path: string = "http://localhost:59749/api/tasklogs/";

  constructor(private http:HttpClient) { }

  getTaskLogs() : Observable<TaskLog[]>{
    return this.http.get<TaskLog[]>(this.path);
  }
}
