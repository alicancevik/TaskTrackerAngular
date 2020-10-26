import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
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

  projects: Project[] = [];
  projectTitles: string[] = [];

  selectedProjectId: number = 0;

  constructor(private projectService: ProjectService, private applicationTaskService: ApplicationTaskService, private router: Router) { }

  ngOnInit(): void {
    this.getProjects();
  }

  taskAddSubmit() {
    let task: TaskAddDto = new TaskAddDto();
    task.title = this.taskAddForm.value.Title;
    task.shortDescription = this.taskAddForm.value.ShortDescription;
    task.fullDescription = this.taskAddForm.value.FullDescription;
    task.projectId = parseInt(this.taskAddForm.value.ProjectId);
    task.taskStatusId = 1;
    task.applicationUserId = null;
    if(task.projectId < 1)
    {
      alert("Please select project!");
      return;
    }
    
    this.applicationTaskService.add(task);
  }

  getProjects() {
    let project:Project = new Project();
    project.id=0;
    project.title="Select Project";
    this.projects.push(project);

    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
    });
  }


}
