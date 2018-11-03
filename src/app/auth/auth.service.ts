import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';
import {delay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  redirectUrl: string;

  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(10000),
      tap(() => this.isLoggedIn = true)
    );
  }

  logout(): Observable<boolean> {
    return of(true).pipe(
      delay(4000),
      tap(() => this.isLoggedIn = false)
    );
  }
}
