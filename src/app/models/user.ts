import {IModule} from "./imodule";

export interface user{
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    userModules?: IModule[]
}