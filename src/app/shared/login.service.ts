import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  username: string;

  constructor() { }

  checkLogin(): boolean {
    if(this.username !== undefined) {
      return true;
    }
    return false;
  }

  login(username): void {
    this.username = username;
  }
  
  logout(): void {
    this.username = undefined;
  }
}
