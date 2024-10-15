import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { user } from 'src/app/models/user';
import {v4 as uuidv4} from 'uuid';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  private users: user[] = [];
  private router = inject(Router);

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  async onSubmit(){

    //create and store user 
    let newUser: user = {
      id: uuidv4(),
      firstName: this.userForm.controls.firstName.value as string,
      lastName: this.userForm.controls.lastName.value as string,
      email: this.userForm.controls.email.value as string,
      password: this.userForm.controls.password.value as string,
      userModules: []
    }

    const result = await fetch('http://localhost:4000/users',{
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {"Content-Type": "application/json"}
    }
    )
      
    // this.users.push(newUser);
    // console.log(newUser);
    // console.log(newUser.userModules)

    console.log(result)
    this.router.navigate(['']);
  }
  
}
