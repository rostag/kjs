import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IUser, UsersService } from '../users/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: Observable<IUser[]>

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(): void {
    this.users = this.usersService.getUsers();
    console.log('Users:', this.users);
    
  }
}
