import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from '../service/loginservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  myform!: FormGroup;
  constructor(private formBuilder:FormBuilder,private loginservice:LoginserviceService,private router:Router){
    this.myform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.maxLength(15)]]

      
    });

  }
  ngOnInit():void{

  }
  onSubmit(){
    if(this.myform.valid){

    //   this.loginservice.loginuser(this.myform).subscribe(
    //     (        data: any) => console.log(data),(error: any)=> console.log(error));
        

this.loginservice.loginuser(this.myform.value).subscribe(
  (data:any)=> {console.log(data);
    alert("login succes");
    window.location.replace("/home");

  }
    
  
);
 
    
  }

}
}
