import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { FormComponent } from './form/form.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateNewsComponent } from './update-news/update-news.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "search", component: SearchComponent},
  {path: "register", component: RegisterComponent},
  {path: "form", component: FormComponent},
  {path: "update/:id", component: UpdateNewsComponent,canActivate: [AuthGuard]},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
