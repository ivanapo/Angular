import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) { }
  
  
  public CurentUser$ = new BehaviorSubject(false);
  public isLoggedIn = this.CurentUser$.asObservable();


  login(username: any, password: any)  {
 

    if (username === 'admin' && password === 'pass') {
      localStorage.setItem('currentUser', username);
      this.router.navigate(['/products']);
      console.log('Login successful');
      this.CurentUser$.next(true);
    } else {
      this.CurentUser$.next(false);
      console.log('Login failed');
    }
  }

  logOut(): void {
    if (localStorage.getItem('currentUser')) {
      localStorage.removeItem('currentUser');
      this.CurentUser$.next(false);
    }
  
  }

}
