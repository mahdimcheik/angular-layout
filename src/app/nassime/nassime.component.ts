import { Component } from '@angular/core';
import { GenericUserPageComponent } from '../generic-user-page/generic-user-page.component';

@Component({
  selector: 'app-nassime',
  standalone: true,
  imports: [GenericUserPageComponent],
  templateUrl: './nassime.component.html',
  styleUrl: './nassime.component.scss',
})
export class NassimeComponent {
  boss: string = 'boss';
  nassime: string = 'il est le meilleur';
  choisir(): void {
    this.boss = 'bad';
  }
}
