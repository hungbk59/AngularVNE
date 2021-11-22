import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private cookie: CookieService) { }

  public settoken(token: string) {
    if (!token){
      this.removeToken()
      return;
    }
    this.cookie.set('token',token,{path: '/', domain: 'localhost', secure: true, sameSite:'Lax'});

    const helper = new JwtHelperService();
    const decodeToken = helper.decodeToken(token);
    console.log('decodeToken',decodeToken);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token)
    console.log('expirationDate',expirationDate)
    console.log('isExpired',isExpired);
  }

  public removeToken() {
    this.cookie.delete('token',  '/', 'localhost', true, "Lax");
    this.router.navigate(['/form'])
  }

  public gettoken() {
    return this.cookie.get('token');
  }

  public isLoggedIn(): boolean {
    return this.cookie.check('token')
  }

  public checkExpToken(){
    const helper = new JwtHelperService();
    const token: any = this.gettoken();
    const isExpired = helper.isTokenExpired(token);
    if(isExpired) {this.removeToken()}
  }
}
