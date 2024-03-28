import { Component, Input, OnInit, inject } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-generic-user-page',
  standalone: true,
  imports: [],
  templateUrl: './generic-user-page.component.html',
  styleUrl: './generic-user-page.component.scss',
})
export class GenericUserPageComponent implements OnInit {
  @Input()
  description: string = '';
  user: string = '';
  userService = inject(UserService);
  constructor() {}
  ngOnInit(): void {
    this.user = this.userService.users[0];
  }
}
