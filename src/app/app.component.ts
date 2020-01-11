import { Component } from '@angular/core';
import {UserService} from './user-service/user.service';
import {User} from './shared/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user:User;

  constructor(private userService: UserService){
    this.user=new User();
    userService.getUserLogged().subscribe( newuser => {this.user=newuser})
  }

}
