


export class AccessTokenDto{
    token:string;
    id:number;
    username:string;
    emailAddress:string;
    applicationUserGroupId:number;
    roles:string[] = [];
}

export class AccessUserDto{
    Id:number;
    Username:string;
    EmailAddress:string;
    ApplicationUserGroupId:number;
    Roles:string[] = [];
}