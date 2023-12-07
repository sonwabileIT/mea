import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './pages.component.html'
})
export class PagesComponent {

}
