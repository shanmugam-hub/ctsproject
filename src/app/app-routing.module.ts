import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { SignupComponent } from './signup/signup.component';
import { ApplicationrequestlistComponent } from './applicationrequestlist/applicationrequestlist.component';
import { ApplicationrequestComponent } from './applicationrequest/applicationrequest.component';
import { NewapplicationComponent } from './newapplication/newapplication.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path:'login',component:LoginComponent
  },
  {
    path:"home",component:HomeComponent,canActivate:[AuthenticationGuard]
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"list" ,component:ApplicationrequestlistComponent
  },{
      path:"user/:id",component:ApplicationrequestComponent
  },
  {
    path:"new",component:NewapplicationComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
