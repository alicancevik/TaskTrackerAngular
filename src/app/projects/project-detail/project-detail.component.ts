import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  projectDetailForm = new FormGroup({
    Title: new FormControl('', Validators.required),
    Description: new FormControl(''),
    CompanyId: new FormControl('', Validators.required),
  });

  companies:Company[] = [];
  
  constructor(private projectService:ProjectService, private companyService: CompanyService,  public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCompanies();
    this.getProjectDetail();
  }

  projectUpdateSubmit(){

  }

  getCompanies(){
    this.companyService.getCompanies().subscribe(data=>{
      this.companies = data;
    })
  }

  getProjectDetail(){
    
    var projectId = this.route.snapshot.paramMap.get('id');

    this.projectService.getProjectDetail(parseInt(projectId)).subscribe(x=> {
      this.projectDetailForm.patchValue({
        Title: x.title,
        Description: x.description,
        CompanyId:x.companyId
      });
    });
  }

}
