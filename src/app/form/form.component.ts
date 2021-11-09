import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { HttpService } from '../Services/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  public status: number = 0;
  public token: any;

  constructor(
    private Http: HttpService,
    private authService: AuthService,
    private router: Router,) {}

  ngOnInit(): void {
    this.status
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
          this.router.navigate(['/home'])}
      },
      (error) => console.log(error),
    )}
  
}