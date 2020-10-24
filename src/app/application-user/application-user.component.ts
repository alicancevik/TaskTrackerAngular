import { Component, OnInit } from '@angular/core';
import { ApplicationUser } from '../models/application-user';
import { ApplicationUserService } from '../services/application-user.service';

@Component({
  selector: 'app-application-user',
  templateUrl: './application-user.component.html',
  styleUrls: ['./application-user.component.css']
})
export class ApplicationUserComponent implements OnInit {

  applicationUsers:ApplicationUser[] = [];
  constructor(private applicationUserService:ApplicationUserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.applicationUserService.getUsers().subscribe(result=>{
      this.applicationUsers = result;
    });
  }

}
