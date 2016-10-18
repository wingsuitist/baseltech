import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;

  constructor(private loginService: LoginService){}

  checkLogin(): boolean {
    return this.loginService.checkLogin();
  }

  login(username): void {
    this.loginService.login(username);
    this.username = this.loginService.username
  }

  logout(): void {
    this.loginService.logout();
    this.username = undefined;
  }

  ngOnInit() {
  }

}
