import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  private users: user[] = [];

  userForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(){

    //create and store user 
    let newUser: user = {

      firstName: this.userForm.controls.firstName.value as string,
      lastName: this.userForm.controls.lastName.value as string,
      email: this.userForm.controls.email.value as string,
      password: this.userForm.controls.password.value as string
    }
      
    this.users.push(newUser);
    console.log(newUser);
    console.log(newUser.userModules)
  }
  
}
