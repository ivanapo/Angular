import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {


  constructor(private authService:AuthService) {}
 

  login(f: NgForm) { 
    
    const username = f.value.username;
    const password = f.value.password;
    this.authService.login(username, password);
  }
  
}
