import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateNewsRoutingModule } from './update-news-routing.module';
import { UpdateNewsComponent } from './update-news.component';
import { ReactiveFormsModule } from '@angular/forms';

//Angular material 
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    UpdateNewsRoutingModule,
    CommonModule,
    ReactiveFormsModule, 
    MatInputModule,

  ],
  declarations: [UpdateNewsComponent],
})
export class UpdateNewsModule { }