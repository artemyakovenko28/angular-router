import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  message: string;
  loggingIn = false;
  loggingOut = false;

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.setMessage();
  }

  setMessage(): void {
    this.message = `Logged ${this.authService.isLoggedIn ? 'in' : 'out'}`;
  }

  onLogin(): void {
    this.loggingIn = true;
    this.message = 'Trying to log in...';

    this.authService.login().subscribe(success => {
      if (success) {
        this.setMessage();
      } else {
        this.message = 'Failed to log in';
      }
      this.loggingIn = false;
      this.authService.isLoggedIn = true;
      const redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
      this.router.navigate([redirect]);
    });
  }

  onLogout(): void {
    this.loggingOut = true;
    this.message = 'Trying to log out';
    this.authService.logout().subscribe(success => {
      if (success) {
        this.setMessage();
      } else {
        this.message = 'Failed to log out. Try later';
      }
    });
    this.setMessage();
  }
}
