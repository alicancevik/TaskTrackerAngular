import { ApplicationUser } from './application-user';


export class Task{
    id:number;
    title:string;
    shortDescription:string;
    fullDescription:string;
    createDate:Date;
    projectId:number;
    taskStatusId:number;
    assignUserId?:number;
    assignUser:ApplicationUser;
}

export class TaskAddDto{

    title:string;            
    shortDescription:string;  
    fullDescription:string;
    projectId:number;
    applicationUserId:number; 
    taskStatusId:number;   
}

export class TaskAssignDto
{
    taskId :number;
    userId :number;
}

export class TaskStatusUpdateDto
{
    taskId   :number;
    statusId :number;
}
   
