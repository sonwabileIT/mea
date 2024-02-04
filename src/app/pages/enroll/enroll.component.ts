import { Component, Input } from '@angular/core';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { IModule } from 'src/app/imodule';
import { ModuleComponent } from 'src/app/components/module/module.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enroll',
  standalone: true,
  imports: [ButtonComponent, ModuleComponent, CommonModule],
  templateUrl: './enroll.component.html'
})
export class EnrollComponent {

  

  moduleList: IModule[] = [
    {
      "id": 0,
      "title": "Business 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    },
    {
      "id": 1,
      "title": "Programming 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    },
    {
      "id": 3,
      "title": "Application Development Fundimentals 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    },
    {
      "id": 4,
      "title": "Multimedia 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    },
    {
      "id": 5,
      "title": "Business 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    },
    {
      "id": 6,
      "title": "Programming 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    },
    {
      "id": 7,
      "title": "Application Development Fundimentals 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    },
    {
      "id": 8,
      "title": "Multimedia 1",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
    }
  ]
}
