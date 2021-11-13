import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../Services/auth.service';
import { HttpService } from '../Services/http.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  public status: number =0;
  public token: any;
  public returnUrl: any;

  constructor(
    private Http: HttpService,
    private authService: AuthService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,) {}

  ngOnInit(): void {
    this.status
    if (this.authService.isLoggedIn()==false){
      this.toastr.warning("Bạn không thể chỉnh sửa bài viết")
    }
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  public signin(){
    console.log("login:");
    console.log("email: " + this.profileForm.value.email);
    console.log("password: " + this.profileForm.value.password);

    const formData = new FormData()
    formData.append("email", this.profileForm.value.email);
    formData.append("password", this.profileForm.value.password);
    this.Http.login(formData).subscribe(
      (response) => {
        console.log(response)
        this.status = response.status;
        this.token = response.token;
        if (this.status == 200){
          this.authService.settoken(this.token)
          this.toastr.success("Đăng nhập thành công!")}
          this.router.navigateByUrl(this.returnUrl);
      },
      (error) => console.log(error),
    )}
  
}