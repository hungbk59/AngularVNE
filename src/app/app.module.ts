import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

//Component
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormComponent } from './form/form.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { RegisterComponent } from './register/register.component';

//PaginationModule
import {NgxPaginationModule} from 'ngx-pagination';
//Angular material 
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';
//animation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//interceptor module
import { Interceptor } from './Interceptor';
//anglar-notification toastr
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    PageNotFoundComponent,
    FormComponent,
    UpdateNewsComponent,
    RegisterComponent,
    MatConfirmDialogComponent,
  ],
  entryComponents: [MatConfirmDialogComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NgxPaginationModule,

    MatSliderModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatDialogModule,

    ToastrModule.forRoot(),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
