import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-add',
  templateUrl: './company-add.component.html',
  styleUrls: ['./company-add.component.css']
})
export class CompanyAddComponent implements OnInit {

  companyName: string = "";
  companyLogo: string = "";

  companyAddForm = new FormGroup({
    companyName: new FormControl('', Validators.required),
    companyLogo: new FormControl(''),
  });

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
  }

  companyAddSubmit() {
    if(!this.companyAddForm.valid){
      alert("Gerekli alanları doldurmanız gerekmektedir!");
      return;
    }

    let company: Company = new Company();
    company.name = this.companyAddForm.value.companyName;

    this.companyService.addCompany(company);
    this.router.navigateByUrl('/companies');
  }

  save(): void {

    let company: Company = new Company();
    company.name = this.companyName;

    this.companyService.addCompany(company);
    this.router.navigateByUrl('/companies');

  }

}
