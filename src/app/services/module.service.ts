import { Injectable } from '@angular/core';
import { IModule } from '../models/imodule';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  constructor() { }

  async getAllModules(): Promise<IModule[]>{
    const result = await fetch('http://localhost:4000/modules')
    const modules = await result.json();
    return modules ?? [];
  }
}
