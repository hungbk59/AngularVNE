import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: "", redirectTo: 'home',pathMatch: 'full'},
  {path: "home", component: HomeComponent},
  {path: "search", 
    loadChildren: () => import('./search/search.module')
    .then(m => m.SearchModule)},
  {path: "register", component: RegisterComponent},
  {path: "form", component: LoginFormComponent},
  {path: "update/:id", 
    loadChildren: () => import('./update-news/update-news.module')
    .then(m => m.UpdateNewsModule),canActivate: [AuthGuard]},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
