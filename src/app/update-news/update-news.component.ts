import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../Services/http.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.scss']
})
export class UpdateNewsComponent implements OnInit {
  public id: number = 0;
  public status: number = 0;

  public updateForm = new FormGroup({
    tieude: new FormControl(''),
    noidung: new FormControl(''),
    uri: new FormControl(''),
  });
  
  ngOnInit(): void {
    this.status
    this.id = this.route.snapshot.params['id'];
    if (this.id > 0){
        this.loadData(this.id);
    }
  }
  private loadData(id: number){
    console.log('load-data', id)
    this.Http.getNewid(id).subscribe((data) => {
      console.log('getnewid', data)
      for (const controlName in this.updateForm.controls){
        if(controlName){
          this.updateForm.controls[controlName].setValue(data.list_news[controlName]);
        }
      }
    })
  }
  constructor(
    private Http: HttpService,
    private route: ActivatedRoute,
  ) { }

  private createNews(){
    const news: any = {};
    for (const controlName in this.updateForm.controls){
      if (controlName){
        news[controlName] = this.updateForm.controls[controlName].value;
      }
    }
    return news;
  }

  public postNew() {
    console.log("New-add");
    console.log(this.createNews());
    const formData = new FormData()
    formData.append("tieude", this.updateForm.value.tieude);
    formData.append("noidung", this.updateForm.value.noidung);
    formData.append("url", this.updateForm.value.uri);
    this.Http.addNew(formData).subscribe((response) =>{
      console.log(response)
      this.status = response.status;},
      (error) => console.log(error))
  }

  public putNew(){
    console.log("New-repair");
    console.log(this.createNews());
    const formData = new FormData()
    formData.append("tieude", this.updateForm.value.tieude);
    formData.append("noidung", this.updateForm.value.noidung);
    formData.append("url", this.updateForm.value.uri);
    
    this.Http.repairNew(formData).subscribe((response) =>{
      console.log(response)
      this.status = response.status;},
    (error) => console.log(error))
  }
}
