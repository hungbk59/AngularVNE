import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { CommonService } from '../Services/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name="";
  public vocative = "";
  public age;

  public check_token: boolean = this.authService.isLoggedIn();

  constructor(
    private common: CommonService,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService,) {
    this.age = common.age;
  }
  ngOnInit(): void {
    this.check_token
  }
  public upage(){
    this.common.age++;
    this.age = this.common.age;
    if (this.age > 20)
      this.vocative = "anh"
    if (this.age === 20)
      this.vocative = "bạn"
  }
  public downage(){
    this.common.age--;
    this.age = this.common.age;
    if (this.age < 20)
      this.vocative = "em"
    if (this.age === 20)
      this.vocative = "bạn"
  }
  public logout(){
    this.authService.removeToken()
    this.toastr.warning("Bạn đã thoát tài khoản")
    console.log('Đã dăng xuất')
  }
  public login(){
    this.router.navigate(['/form'])
  }

  public logup(){
    this.router.navigate(['/register'])
  }
  
}
