import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [HomeComponent, NavbarComponent],
  templateUrl: './pages.component.html'
})
export class PagesComponent {

}
