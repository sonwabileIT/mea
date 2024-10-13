import { Component, Input } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IModule } from 'src/app/models/imodule';
import { ModuleComponent } from 'src/app/components/module/module.component';
import { CommonModule } from '@angular/common';
import { ModuleService } from 'src/app/services/module.service';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [ButtonComponent, ModuleComponent, CommonModule],
  templateUrl: './enroll.component.html'
})
export class EnrollComponent {

  // ngOnInit
  constructor(private moduleService: ModuleService){}

  ngOnInit(): void{
    this.getAllModules()
  }

  async getAllModules(){
    this.moduleList = await this.moduleService.getAllModules()
  }

  moduleList: IModule[] = []
}
