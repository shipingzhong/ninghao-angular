import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  constructor() {}
  login() {
    this.isLoggedIn = true;
    console.log('logged in');
  }
  logout() {
    this.isLoggedIn = false;
    console.log('logged out');
  }
}
