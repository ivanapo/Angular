import { Injectable } from '@angular/core';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }
  isLoggedIn: boolean = false;
  storedUsername = localStorage.getItem('currentUser');

  login(username: any, password: any)  {
 

    if (username === 'admin' && password === 'pass') {
      localStorage.setItem('currentUser', username);
      this.router.navigate(['/products']);
      console.log('Login successful');
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
      console.log('Login failed');
    }
  }

  logOut(): void {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
      this.storedUsername = ""; 
      this.isLoggedIn = false;
    }
    
  }

  logged(): boolean {
    return this.isLoggedIn
  }
}
