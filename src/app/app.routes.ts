import { Routes } from '@angular/router';
import { GenericUserPageComponent } from './generic-user-page/generic-user-page.component';

export const routes: Routes = [
  {
    path: 'user/:id',
    component: GenericUserPageComponent,
  },
  {
    path: 'user',
    component: GenericUserPageComponent,
  },
];
