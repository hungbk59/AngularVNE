import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../Services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    re_password: new FormControl('')
  });
  public status: number =0;
  constructor(private Http: HttpService) { }

  ngOnInit(): void {
    this.status
  }

  public signup(){
    console.log("register:");
    console.log("email: " + this.registerForm.value.email);
    console.log("password: " + this.registerForm.value.password);
    
    const formData = new FormData()
    formData.append("email", this.registerForm.value.email);
    formData.append("password", this.registerForm.value.password);
    formData.append("re_password", this.registerForm.value.re_password);
    this.Http.register(formData).subscribe(
      (response) =>{
        console.log(response)
        this.status = response.status;},
      (error) => console.log(error))
  }
}
