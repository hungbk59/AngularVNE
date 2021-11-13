import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//PaginationModule
import {NgxPaginationModule} from 'ngx-pagination';
//Angular material 
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    SearchRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgxPaginationModule,

    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    
  ],
  declarations: [SearchComponent],
})
export class SearchModule { }