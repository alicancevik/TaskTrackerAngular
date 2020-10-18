import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  path: string = "http://localhost:59749/api/projects/";

  constructor(private http:HttpClient, private router: Router) { }

  getProjects() : Observable<Project[]>{
    return this.http.get<Project[]>(this.path);
  }

  getProjectDetail(projectId:number){
    return this.http.get<Project>(this.path + projectId);
  }

  add(project: Project){
    this.http.post(this.path + "add",project).subscribe(d=>{
      this.router.navigate(['/projects']);
    });
  }
}
