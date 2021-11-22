import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpService } from '../Services/http.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';
import { AuthService } from '../Services/auth.service';
import { CommonService } from '../Services/common.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  public news:any;
  public posts:any;
  public tieude;
  public noidung;
  page:number=1;
  
  isloading=false;

  constructor(
    private Http: HttpService,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService,
    private toastr: ToastrService,
    private common: CommonService,){
    this.tieude = common.search_title;
    this.noidung = common.search_content;}

  public ngOnInit(): void {
    this.loadNews()
  }

  public profileForm = new FormGroup({
    tieude: new FormControl(''),
    noidung: new FormControl(''),
  });
  public postupdate(){
    this.router.navigate(['update/',0])
  }
  public editNew(Newid: number){
    this.router.navigate(['update/',Newid])
  }

  public loadNews(){
    this.isloading = true;
    this.Http.getdata(this.tieude, this.noidung).subscribe((data) => {
      this.news = data.list_news;
      console.log('list-data:', this.news);
      this.isloading = false;
    });
  }
  public searchNew(){
    
    console.log("Search:");
    console.log("Tiêu đề: " + this.profileForm.value.tieude);
    console.log("Nội dung: " + this.profileForm.value.noidung);

    this.tieude =this.common.search_title= this.profileForm.value.tieude;
    this.noidung =this.common.search_content= this.profileForm.value.noidung;

    this.loadNews()
  }
  
  public deleteNew(Newid: number, Newtitle: string){
    this.authService.checkExpToken();
    if (this.authService.isLoggedIn()){
      console.error('Đã đăng nhập')
      let dialogRef=this.dialog.open(MatConfirmDialogComponent,{
        data: Newtitle
      });
      dialogRef.afterClosed().subscribe(data => {
        console.log('dialog-data:', data)
        if(data){
            this.Http.delNew(Newid).subscribe((rep) => {
            console.log('delete:', rep);
          })
        }
        this.searchNew();
      })
    }
    else{
      this.toastr.warning("Đăng nhập để xóa bài viết")
      this.router.navigate(['/form'])
    }
  } 
}
