import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {


  companyDetailForm = new FormGroup({
    companyName: new FormControl(''),
    companyLogo: new FormControl(''),
  });

  
  constructor(private companyService:CompanyService,  public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCompanyDetail();
  }

  getCompanyDetail(){
    var companyId = this.route.snapshot.paramMap.get('id');
    this.companyService.getCompanyDetail(parseInt(companyId)).subscribe(x=> {
      this.companyDetailForm.patchValue({
        companyName: x.name,
        companyLogo: x.logo
      });
    });
  }

  companyUpdateSubmit(){

  }

}
