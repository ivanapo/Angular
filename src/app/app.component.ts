import { Component } from '@angular/core';
import { AuthService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html' ,
  providers: [AuthService]
})




export class AppComponent {
  pageTitle: string = 'Angular Project';

  

  constructor(private authService: AuthService) {}

  logged(): boolean { 
    return this.authService.logged();
}


  logOut(): void {
    this.authService.logOut();
  }

 
}
