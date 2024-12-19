import { Component, inject } from '@angular/core';
import { IModule } from 'src/app/models/imodule';
import { CommonModule } from '@angular/common';
import { ModuleService } from 'src/app/services/module.service';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/models/user';
import { UserauthService } from 'src/app/services/userauth.service';

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

  userAuth = inject(UserauthService)
  userService = inject(UserService)

  constructor(){}

  ngOnInit(): void{
    // this.getModules();
    let localUserId = localStorage.getItem('userId')!;
    // let user: user = JSON.parse(localUserId)

    this.getUser(JSON.parse(localUserId));

  }

  // async getModules() {
  //   this.moduleList = await this.moduleService.getAllModules()
  // }

  async getUser(id: string) {
    this.user = await this.userService.getUserById(id)
  }


  user: any = {} ;
  moduleList: IModule[] = [];

}
