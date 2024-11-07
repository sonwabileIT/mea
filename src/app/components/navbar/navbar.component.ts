import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserauthService } from 'src/app/services/userauth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  userAuth = inject(UserauthService)
  router = inject(Router)

  logout(){
    try {
      this.userAuth.logout();
      console.log("Logging out user: " + this.userAuth.getIsLoggedIn());
      this.router.navigate(['/']);
    }catch(err){
      console.log("Error message: " + err)
    }
    
  }

}
