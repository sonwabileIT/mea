import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { UserauthService } from 'src/app/services/userauth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  userAuth = inject(UserauthService)
  router = inject(Router)

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(){
    // console.log(this.loginForm.value);
    //userAuth.login(email, password)
    try{
      this.userAuth.login(this.loginForm.controls.email.value!, this.loginForm.controls.password.value!)
      this.router.navigate(['/mymodules'])
    }catch(err){
      console.log("Error: " + err)
    }
    
  }

}
