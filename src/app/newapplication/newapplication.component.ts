import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { LoginserviceService } from '../service/loginservice.service';
import { Router } from '@angular/router';
import { valHooks } from 'jquery';

@Component({
  selector: 'app-newapplication',
  templateUrl: './newapplication.component.html',
  styleUrls: ['./newapplication.component.css']
})
export class NewapplicationComponent implements OnInit {
  companyOptions: any[] = [];

  myform !: FormGroup;
  constructor(private formBuilder:FormBuilder,private loginservice:LoginserviceService,private router:Router){
    this.myform = this.formBuilder.group({
      userName: ['', [Validators.required]],
      officialEmail:['',[Validators.required,Validators.email]],

      phoneNumber: ['', [Validators.required,Validators.maxLength(10)]],
      designation: ['', [Validators.required]],
      companyName: ['', [Validators.required]],

      role: ['', [Validators.required]],
      employeeId: ['', [Validators.required]],
      aadharNumber: ['', [Validators.required]],

      licenseNo: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      rTA: ['', [Validators.required]]
      
    });
  }
  ngOnInit():void{
    
   this.loginservice.getCompany().subscribe( (data:any) => {
    this.companyOptions = data;
    console.log(this.companyOptions);
  },
  (error:any) => {
    console.error('Error retrieving role options:', error);
  }
);
  }
  toCreate(){
    console.log(this.myform.value);
    this.loginservice.saveData(this.myform.value).subscribe(
      (data)=>{console.log(data)
      ,alert("Created successfull")},
      (error:any)=>{console.log(error),
      alert("failed")}

    );
  }

}
