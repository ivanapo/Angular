import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
  <a class='navbar-brand'>{{pageTitle}}</a>
  <ul class='nav nav-pills me-auto'>
        <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
    </ul>
    <div class="d-flex"> 
      <p style="margin-right: 10px;" >{{storedUsername}} |</p>
        <a class='nav-link' routerLink='/welcome' (click)="logOut()">
            {{ storedUsername ? "Log Out" : "Log In" }}
        </a>
    </div>
  </div>
</nav>
   
    <div class='container'>
      <router-outlet></router-outlet>
    </div>
    `,
})




export class AppComponent {
  pageTitle: string = 'Angular Project';


  constructor() {}

  storedUsername = localStorage.getItem('currentUser');

  logOut(): void {
    if (localStorage.getItem('currentUser')) { 
      localStorage.removeItem('currentUser');
      this.storedUsername = "" 
      
    }
}
}
