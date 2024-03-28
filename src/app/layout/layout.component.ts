import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  triggered: boolean = false;
  classSidenav: string = this.triggered ? 'sidenav-on' : 'sidenav-off';
  toggle() {
    this.triggered = !this.triggered;
    this.classSidenav = this.triggered ? 'sidenav-on' : 'sidenav-off';
  }
}
