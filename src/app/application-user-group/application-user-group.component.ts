import { Component, OnInit } from '@angular/core';
import { ApplicationUserGroup } from '../models/application-user-group';
import { ApplicationUserGroupService } from '../services/application-user-group.service';

@Component({
  selector: 'app-application-user-group',
  templateUrl: './application-user-group.component.html',
  styleUrls: ['./application-user-group.component.css']
})
export class ApplicationUserGroupComponent implements OnInit {


  userGroups:ApplicationUserGroup[] = [];

  constructor(private applicationUserGroupService:ApplicationUserGroupService) { }

  ngOnInit(): void {
    this.getUserGroupsFromService();
  }

  getUserGroupsFromService(){
    this.applicationUserGroupService.getUserGroups().subscribe(data=>{
        this.userGroups = data
    });
  }

  generateUserGroups(){
    let group1:ApplicationUserGroup = new ApplicationUserGroup();
    group1.id=1;
    group1.title="Yazılım";

    let group2:ApplicationUserGroup = new ApplicationUserGroup();
    group2.id=2;
    group2.title="Muhasebe";

    let group3:ApplicationUserGroup = new ApplicationUserGroup();
    group3.id=3;
    group3.title="Satış";

    let group4:ApplicationUserGroup = new ApplicationUserGroup();
    group4.id=4;
    group4.title="Destek";

    let group5:ApplicationUserGroup = new ApplicationUserGroup();
    group5.id=5;
    group5.title="Yönetim";

    let group6:ApplicationUserGroup = new ApplicationUserGroup();
    group6.id=6;
    group6.title="İnsan Kaynakları";


    this.userGroups.push(group1);
    this.userGroups.push(group2);
    this.userGroups.push(group3);
    this.userGroups.push(group4);
    this.userGroups.push(group5);
    this.userGroups.push(group6);

  }

}
