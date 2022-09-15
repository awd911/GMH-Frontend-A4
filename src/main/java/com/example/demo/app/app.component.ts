import { Component } from '@angular/core';
import { UserService } from './user.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment4';
  email: string;
  password: string;
  loggedIn: boolean;

  constructor(public userService: UserService){}

  signUp(){
    this.userService.signup(this.email,this.password);
    this.email = '';
    this.password = '';
  }

  login(){
    this.userService.login(this.email,this.password);
    this.loggedIn = true;
    this.email = '';
    this.password = '';
  }

  logout(){
    this.userService.logout();
  }
}
