import { Component, Input, inject } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IModule } from 'src/app/models/imodule';
import { CommonModule } from '@angular/common';
import { ModuleService } from 'src/app/services/module.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserauthService } from 'src/app/services/userauth.service';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [ButtonComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './enroll.component.html'
})
export class EnrollComponent {

  user: Partial<user> = {};

  getModuleList: IModule[] = []
  userAuth = inject(UserauthService)
  userService = inject(UserService)

  studentModules: IModule[] = []

  // ngOnInit
  constructor(private moduleService: ModuleService){}

  ngOnInit(): void{
    this.getAllModules()
    this.getUser(JSON.parse(localStorage.getItem('userId')!))
  }

  modulosenrollForm = new FormGroup({
    applicationDevelopmentFundimentals1: new FormControl(false),
    applicationDevelopmentPractice1: new FormControl(false),
    multimediaApplicationsFundimentals1: new FormControl(false),
    programmingFundimentals1: new FormControl(false),
    projectManagement1: new FormControl(false),
    multimediaApplicationsPracticles: new FormControl(false)
  })
  
  

  async getAllModules(){
    this.getModuleList = await this.moduleService.getAllModules()
  }

  async getUser(id: string) {
    this.user = await this.userService.getUserById(id)
  }

  submit(id: string){
    let userSubjects = [
      this.modulosenrollForm.controls.applicationDevelopmentFundimentals1.value ,
      this.modulosenrollForm.controls.applicationDevelopmentPractice1.value ,
      this.modulosenrollForm.controls.multimediaApplicationsFundimentals1.value as boolean,
      this.modulosenrollForm.controls.programmingFundimentals1.value as boolean,
      this.modulosenrollForm.controls.projectManagement1.value as boolean,
      this.modulosenrollForm.controls.multimediaApplicationsPracticles.value as boolean
    ]

    // this.studentModules = this.moduleList

    //let selectedSubjects = userSubjects.filter((selectedSubject) => selectedSubject === 'false')

    // for(){

    // }

    //let localUser = JSON.parse(localStorage.getItem('user')!)

    //let user = this.userAuth.getUser(localUser.id)

    //fetch

    let result = fetch(`http://localhost:4000/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        userModules: userSubjects
      }),
      headers: {"Content-Type": "application/json"}
    })

    console.log(userSubjects)
    console.log(this.getModuleList)
  }

  
}
