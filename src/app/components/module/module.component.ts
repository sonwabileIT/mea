import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IModule } from 'src/app/imodule';

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './module.component.html'
})
export class ModuleComponent {

  @Input() module!: IModule;

}
