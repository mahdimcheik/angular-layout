import { Component, Input, OnInit, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
  @Input()
  id: string = '';
  user: string = '';
  mode: boolean = true;
  userService = inject(UserService);
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {
    // this.id = this.route.snapshot.paramMap.get('id') ?? '';
    this.mode = this.userService.mode;
    console.log('mode value : ', this.mode);
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id') ?? '';
      this.user =
        this.id !== ''
          ? this.userService.users[+this.id] ?? 'this user does not exist'
          : 'this user does not exist';
    });
  }
  toggleMode(): void {
    this.userService.mode = !this.userService.mode;
    console.log('mode value : ', this.mode);
  }
}
