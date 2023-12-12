import { Component } from '@angular/core';
// import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [ NavbarComponent, RouterModule],
  templateUrl: './pages.component.html'
})
export class PagesComponent {

}
