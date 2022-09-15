import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  signInFormVisible = true;
  loggedIn: Observable<boolean>;

   email: string = '';
   password: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  makeSignInFormVisible(){
    this.signInFormVisible = true;
  }
  makeSignUpFormVisible(){
    this.signInFormVisible = false;
  }


  login(){
    console.log("Login in Achieved")
    this.userService.login(this.email, this.password);
    this.email = "";
    this.password = "";
  }

  signup(){
    console.log("Sign up Achieved")
    this.userService.signup(this.email, this.password);
    this.email = "";
    this.password = "";
  }

}
