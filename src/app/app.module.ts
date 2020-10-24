import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ApplicationUserGroupComponent } from './application-user-group/application-user-group.component';
import { ApplicationUserComponent } from './application-user/application-user.component';
import { TaskComponent } from './task/task.component';
import { TaskStatusComponent } from './task-status/task-status.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardUsersWidgetComponent } from './dashboard-users-widget/dashboard-users-widget.component';
import { DashboardWidgetComponent } from './dashboard-widget/dashboard-widget.component';
import { TaskDetailComponent } from './task/task-detail/task-detail.component';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { ApplicationUserGroupService } from './services/application-user-group.service';
import { HttpClientModule } from '@angular/common/http';
import { UserGroupAddComponent } from './application-user-group/user-group-add/user-group-add.component';
import { UserGroupDetailComponent } from './application-user-group/user-group-detail/user-group-detail.component';
import { ProjectsComponent } from './projects/projects.component';
import { TaskLogComponent } from './task-log/task-log.component';
import { CompaniesComponent } from './companies/companies.component';
import { DashboardService } from './services/dashboard.service';
import { CompanyAddComponent } from './companies/company-add/company-add.component';
import { CompanyDetailComponent } from './companies/company-detail/company-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompanyService } from './services/company.service';
import { ApplicationTaskService } from './services/application-task.service';
import { ProjectService } from './services/project.service';
import { TaskAssignComponent } from './task/task-assign/task-assign.component';
import { TaskLogService } from './services/task-log.service';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { TaskLogDetailComponent } from './task-log/task-log-detail/task-log-detail.component';
import { ProjectAddComponent } from './projects/project-add/project-add.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginGuard } from './guards/login-guard';
import { TaskStatusAddComponent } from './task-status/task-status-add/task-status-add.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    ApplicationUserGroupComponent,
    ApplicationUserComponent,
    TaskComponent,
    TaskStatusComponent,
    LoginComponent,
    HomeComponent,
    CustomerComponent,
    DashboardUsersWidgetComponent,
    DashboardWidgetComponent,
    TaskDetailComponent,
    TaskAddComponent,
    UserGroupAddComponent,
    UserGroupDetailComponent,
    ProjectsComponent,
    TaskLogComponent,
    CompaniesComponent,
    CompanyAddComponent,
    CompanyDetailComponent,
    TaskAssignComponent,
    ProjectDetailComponent,
    TaskLogDetailComponent,
    ProjectAddComponent,
    LoginFormComponent,
    TaskStatusAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ApplicationUserGroupService,
    DashboardService,
    CompanyService,
    ApplicationTaskService,
    ProjectService,
    TaskLogService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
