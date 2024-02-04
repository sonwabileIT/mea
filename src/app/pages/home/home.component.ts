import { Component } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
