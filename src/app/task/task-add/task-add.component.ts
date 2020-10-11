import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/project';
import { Task, TaskAddDto } from 'src/app/models/task';
import { ApplicationTaskService } from 'src/app/services/application-task.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  taskAddForm = new FormGroup({
    Title: new FormControl('', Validators.required),
    ShortDescription: new FormControl(''),
    FullDescription: new FormControl(''),
    ProjectId: new FormControl('', Validators.required),
    
  });

  projects:Project[] = [];

  constructor(private projectService:ProjectService, private applicationTaskService:ApplicationTaskService, private router:Router) { }

  ngOnInit(): void {
    this.getProjects();
  }

  taskAddSubmit(){
    let task:TaskAddDto = new TaskAddDto();
    task.title = this.taskAddForm.value.Title;
    task.shortDescription = this.taskAddForm.value.ShortDescription;
    task.fullDescription = this.taskAddForm.value.FullDescription;
    task.projectId = parseInt(this.taskAddForm.value.ProjectId);
    task.taskStatusId = 1;
    task.applicationUserId = null;
    this.applicationTaskService.add(task);
    // this.router.navigateByUrl('/tasks');


    //this.router.navigate(['/tasks']);
  }

  getProjects(){
    this.projectService.getProjects().subscribe(data=>{
      this.projects = data
    });
  }

}
