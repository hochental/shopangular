import { Component, OnInit } from '@angular/core';
import {User} from '../shared/user';
import {UserService} from '../user-service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:User;

  constructor(private userService: UserService){
    this.user=new User();
    userService.getUserLogged().subscribe( newuser => {this.user=newuser})
  }

  ngOnInit() {

  }

}
