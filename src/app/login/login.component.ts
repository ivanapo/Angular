import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {


  constructor( private router: Router) {}
  isLoggedIn: boolean = false;

  login(f: NgForm) {

    if (f.value.username === 'test' && f.value.password === 'pass') {
      localStorage.setItem('currentUser', f.value.username);
      this.isLoggedIn = true;
      this.router.navigate(['/products']);
      console.log('Login successful');
    } else {
      this.isLoggedIn = false;
      console.log('Login failed');
    }
  }

 

}
