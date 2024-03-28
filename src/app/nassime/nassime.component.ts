import { Component } from '@angular/core';

@Component({
  selector: 'app-nassime',
  standalone: true,
  imports: [],
  templateUrl: './nassime.component.html',
  styleUrl: './nassime.component.scss',
})
export class NassimeComponent {
  boss: string = 'boss';
  choisir(): void {
    this.boss = 'bad';
  }
}
