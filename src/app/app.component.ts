import { Component } from '@angular/core';
// import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ PagesComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'module-enrollment-application';
}
