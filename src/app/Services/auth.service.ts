import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public settoken(token: string) {
    if (!token){
      this.removeToken()
      return;
    }
    localStorage.setItem('token', token);

    const helper = new JwtHelperService();
    const decodeToken = helper.decodeToken(token);
    console.log('decodeToken',decodeToken);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token)
    console.log('expirationDate',expirationDate)
    console.log('isExpired',isExpired);
  }

  public removeToken() {
    localStorage.removeItem('token');
    this.router.navigate(['/form'])
  }

  public gettoken() {
    return localStorage.getItem('token');
  }

  public isLoggedIn(): boolean {
    return this.gettoken() !== null
  }

  public checkExpToken(){
    const helper = new JwtHelperService();
    const token: any = this.gettoken();
    const isExpired = helper.isTokenExpired(token);
    if(isExpired) {this.removeToken()}
  }
}
