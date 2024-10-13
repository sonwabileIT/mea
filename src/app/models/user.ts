import {IModule} from "./imodule";

export interface user{
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userModules?: IModule[]
}