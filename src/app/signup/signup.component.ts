import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from '../service/loginservice.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

 myform!:FormGroup;
 alertMessage:string="";
constructor(private formbuilder:FormBuilder,private router:Router,private loginservice:LoginserviceService){
  this.myform=formbuilder.group({
    name:['',[Validators.required,Validators.minLength(5)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.maxLength(15)]]

})

}

  createUser(){
   if(this.myform.valid){
    console.log(this.myform.value)

      this.loginservice.signupuser(this.myform.value).subscribe(
        data =>{console.log(data),
        this.alertMessage = 'SignUp Successful !!',

        this.myform.reset
  });
}
      
    

  }
}
