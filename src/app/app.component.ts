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
  constructor(private authService: AuthService) { }

  logged(): boolean {
    if(this.authService.logged()) {
      this.user = localStorage.getItem('currentUser')!!;
      return true;
    } 
    return false;
  }

  logOut(): void {
    this.user = '';
    this.authService.logOut();
  }
}