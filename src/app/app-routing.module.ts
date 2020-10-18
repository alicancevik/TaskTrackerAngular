import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationUserGroupComponent } from './application-user-group/application-user-group.component';
import { ApplicationUserComponent } from './application-user/application-user.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyAddComponent } from './companies/company-add/company-add.component';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectAddComponent } from './projects/project-add/project-add.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { TaskLogComponent } from './task-log/task-log.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { TaskAssignComponent } from './task/task-assign/task-assign.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { TaskComponent } from './task/task.component';


const routes: Routes = [
  {path:"", component:DashboardComponent, pathMatch:"full"},
  {path:"dashboard", component:DashboardComponent},
  {path:"usergroups", component:ApplicationUserGroupComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"projects/add", component:ProjectAddComponent},
  {path:"project/detail/:id", component:ProjectDetailComponent},
  {path:"companies", component:CompaniesComponent},
  {path:"company/add", component:CompanyAddComponent},
  {path:"company/detail/:id", component:CompanyDetailComponent},
  {path:"tasks", component:TaskComponent},
  {path:"tasks/detail/:id", component:TaskDetailComponent},
  {path:"tasks/add", component:TaskAddComponent},
  {path:"tasks/assign", component:TaskAssignComponent},
  {path:"tasklogs", component:TaskLogComponent},
  {path:"users", component:ApplicationUserComponent},
  {path:"taskstatuses", component:TaskStatusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
