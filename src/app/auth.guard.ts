import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authuService: AuthService,
    private toastr: ToastrService,
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
        return true;
      }
      else{
        this.router.navigate(['/form'],{ queryParams: { returnUrl: state.url }})
        this.toastr.warning("Đăng nhập để chỉnh sửa bài viết")
        console.error('Không có quyền truy cập') 
        return false;
      }   
  }
}
