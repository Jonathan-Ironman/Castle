import { Injectable } from '@angular/core';
// TODO import from firebase/app for prod??
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  provider: any;

  authenticate() {
    firebase
      .auth()
      .signInWithPopup(this.provider)
      .then(result => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = result.credential as firebase.auth.OAuthCredential;
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch(error => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...
      });
  }

  constructor() {
    this.provider = new firebase.auth.GoogleAuthProvider();
  }
}
