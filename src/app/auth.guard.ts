import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authuService: AuthService,
    private router: Router) {}
    
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    |Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree> 
    | boolean 
    | UrlTree {
      console.log('canActivate', route,state);
      this.authuService.checkExpToken()

      if (this.authuService.isLoggedIn()) {
        console.error('Đã đăng nhập')
      }
      else{
        this.router.navigate(['/form'])
        console.error('Không có quyền truy cập')
      }
    return true;
  }
}
