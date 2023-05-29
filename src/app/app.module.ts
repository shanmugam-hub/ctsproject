import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginserviceService } from './service/loginservice.service';
import { SignupComponent } from './signup/signup.component';
import { NewapplicationComponent } from './newapplication/newapplication.component';
import { ApplicationrequestlistComponent } from './applicationrequestlist/applicationrequestlist.component';
import { ApplicationrequestComponent } from './applicationrequest/applicationrequest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    
    SignupComponent,
         NewapplicationComponent,
         ApplicationrequestlistComponent,
         ApplicationrequestComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports :[
    DataTablesModule,
    
  ],
  providers: [LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
