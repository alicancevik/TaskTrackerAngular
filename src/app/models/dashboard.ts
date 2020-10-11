import { ApplicationUser } from './application-user';
import { TaskLog } from './task-log';


export class Dashboard{
    totalTask: number;
    inProgressTask: number;
    doneTask: number;
    canceledTask: number;
    lastApplicationUsers:ApplicationUser[];
    lastTaskLogs:TaskLog[];
}