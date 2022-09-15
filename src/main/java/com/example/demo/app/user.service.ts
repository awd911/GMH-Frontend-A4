import { Injectable } from '@angular/core';
​
import { AngularFireAuth } from '@angular/fire/compat/auth'
import * as firebase from 'firebase/app';
import { BehaviorSubject, Observable } from 'rxjs';

//import { Observable } from 'rxjs/Observable';

​
@Injectable({
  providedIn: 'root'
})
export class UserService {
​
  user: Observable<any>;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

​
  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;

    console.log("User Id Token at the construction of the Service",localStorage.getItem('userIdToken'));


    this.user.subscribe(
      userInfo => {
        console.log("User Info is Available", userInfo.getIdToken())
        this.storeIdToken(userInfo.getIdToken());
      }
    );
  }


  storeIdToken(idToken: Promise<string>){
    idToken.then(
      idTokenValue => {
        localStorage.setItem('userIdToken',idTokenValue)
        console.log("Id Token Value: ",localStorage.getItem('userIdToken'));
      }
    );
  }
​
  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        this.loggedIn.next(true);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }
​
  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }

  logout() {
    localStorage.clear();
    this.firebaseAuth.signOut();
    // .auth
  }
}