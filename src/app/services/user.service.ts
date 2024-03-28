import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: string[] = [
    'Marie, is the best designer',
    'Adam is the best coder',
    'Nassime is the best',
  ];
  mode: boolean = true;
  constructor() {}
}
