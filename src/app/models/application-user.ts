import { ApplicationUserGroup } from './application-user-group';


export class ApplicationUser{
    id:number;
    username:string;
    emailAddress:string;
    applicationUserGroupId:number;
    applicationUserGroup:ApplicationUserGroup;
}