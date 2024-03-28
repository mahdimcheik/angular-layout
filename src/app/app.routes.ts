import { Routes } from '@angular/router';
import { NassimeComponent } from './nassime/nassime.component';
import { AdamComponent } from './adam/adam.component';
import { MarieComponent } from './marie/marie.component';

export const routes: Routes = [
  {
    path: 'nassime',
    component: NassimeComponent,
  },
  {
    path: 'adam',
    component: AdamComponent,
  },
  {
    path: 'marie',
    component: MarieComponent,
  },
];
