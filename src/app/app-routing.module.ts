import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationUserGroupComponent } from './application-user-group/application-user-group.component';
import { ApplicationUserComponent } from './application-user/application-user.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyAddComponent } from './companies/company-add/company-add.component';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuard } from './guards/login-guard';
import { LoginFormComponent } from './login-form/login-form.component';
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
  {path:"", component:DashboardComponent, pathMatch:"full", canActivate: [LoginGuard]},
  {path:"dashboard", component:DashboardComponent, canActivate: [LoginGuard] },
  {path:"usergroups", component:ApplicationUserGroupComponent, canActivate: [LoginGuard] },
  {path:"projects", component:ProjectsComponent, canActivate: [LoginGuard] },
  {path:"projects/add", component:ProjectAddComponent, canActivate: [LoginGuard] },
  {path:"project/detail/:id", component:ProjectDetailComponent, canActivate: [LoginGuard] },
  {path:"companies", component:CompaniesComponent, canActivate: [LoginGuard] },
  {path:"company/add", component:CompanyAddComponent, canActivate: [LoginGuard] },
  {path:"company/detail/:id", component:CompanyDetailComponent, canActivate: [LoginGuard] },
  {path:"tasks", component:TaskComponent, canActivate: [LoginGuard] },
  {path:"tasks/detail/:id", component:TaskDetailComponent, canActivate: [LoginGuard] },
  {path:"tasks/add", component:TaskAddComponent, canActivate: [LoginGuard] },
  {path:"tasks/assign", component:TaskAssignComponent, canActivate: [LoginGuard] },
  {path:"tasklogs", component:TaskLogComponent, canActivate: [LoginGuard] },
  {path:"users", component:ApplicationUserComponent, canActivate: [LoginGuard] },
  {path:"taskstatuses", component:TaskStatusComponent, canActivate: [LoginGuard] },
  {path:"login", component:LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
