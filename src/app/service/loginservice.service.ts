import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../Model/apiresponse';
import { Observable, catchError, throwError } from 'rxjs';
import { Router, RouterConfigOptions } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http:HttpClient,private router:Router) { }

  Url : string="http://localhost:9091/api";
  isLoggedIn :boolean=true;

  private handleError(error:any){
    if(error.status==0){
    alert('An error occurred: '+"Connection Refused");
  } else {

    if(error.error.hasOwnProperty('message')){
      alert(error.error.message);
    }
    }
    return throwError('An error occured');

    
  }
  loginuser(email:String,aadharnumber:String):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    
    const body = {  email ,aadharnumber};
     console.log(body);
    return this.http.post(`${this.Url}/login`,body ).pipe(catchError(this.handleError));;
     
  
  }
  signupuser(user:any){
   return this.http.post(this.Url+"/signup",user).pipe(catchError(this.handleError));
  }
  getemployees(){
    return this.http.get(this.Url+"/applications").pipe(catchError(this.handleError));
  }
  getById(id:number){
    return this.http.get(this.Url+"/applications/"+id).pipe(catchError(this.handleError));
  }
  
  approval(data:any){
    return this.http.put(this.Url+"/applications/approvereject",data, {responseType: 'text'});
  }
  getCompany(){
    return this.http.get(this.Url+"/companies").pipe(catchError(this.handleError));
  }
  saveData(data:any){
    return this.http.post(this.Url+"/applications/new",data).pipe(catchError(this.handleError));
  }
  
  

}
