import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  
  path: string = "http://localhost:59749/api/companies/";

  constructor(private http:HttpClient) { }

  getCompanies() : Observable<Company[]>{
    return this.http.get<Company[]>(this.path);
  }

  getCompanyDetail(companyId:number){
    return this.http.get<Company>(this.path + companyId);
  }

  addCompany(company:Company){
      this.http.post(this.path + "add",company).subscribe(d=>{});
  }
}
