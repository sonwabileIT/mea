import { Component } from '@angular/core';
import { IModule } from 'src/app/models/imodule';
import { CommonModule } from '@angular/common';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-my-modules',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-modules.component.html'
})
export class MyModulesComponent {

  // async getAllModules(): Promise<IModule[]>{
  //   const result = await fetch('http://localhost:4000/modules')
  //   const modules = await result.json();
  //   return modules ?? [];
  // }

  constructor(private moduleService: ModuleService){}

  ngOnInit(): void{
    this.getModules();
  }

  async getModules() {
    this.moduleList = await this.moduleService.getAllModules()
  }

   moduleList: IModule[] = [];

}
