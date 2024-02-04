import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './signup.component.html'
})
export class SignupComponent {

}
