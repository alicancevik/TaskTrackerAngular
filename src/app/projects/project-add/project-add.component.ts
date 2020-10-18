import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from 'src/app/models/company';
import { Project } from 'src/app/models/project';
import { CompanyService } from 'src/app/services/company.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.css']
})
export class ProjectAddComponent implements OnInit {

  projectAddForm = new FormGroup({
    Title: new FormControl('', Validators.required),
    Description: new FormControl(''),
    CompanyId: new FormControl('', Validators.required),
    
  });

  companies:Company[] = [];

  constructor(private projectService: ProjectService, private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  projectAddSubmit(){
    
    let project: Project = new Project();
    project.title = this.projectAddForm.value.Title;
    project.description = this.projectAddForm.value.Description;
    project.companyId = parseInt(this.projectAddForm.value.CompanyId);

    this.projectService.add(project);

    
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe(data=>{
      this.companies = data;
    })
  }

}
