import { Component } from '@angular/core';
import { AuthService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [AuthService]
})

export class AppComponent {
  pageTitle: string = 'Angular Project';
  user = '';
  isLoggedIn = false;
  
  constructor(private authService: AuthService) {
    authService.CurentUser$.subscribe(user => {
      this.isLoggedIn = user
    });
   }


  logOut(): void {
    
    this.user = '';
    this.authService.logOut();
  }
}