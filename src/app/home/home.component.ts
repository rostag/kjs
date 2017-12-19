import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../users/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: IUser;

  currentDate = new Date();

  @Input() appTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
