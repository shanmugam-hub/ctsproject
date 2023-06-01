import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { LoginserviceService } from '../service/loginservice.service';
import { Router } from '@angular/router';
import { valHooks } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { futureDateValidator } from '../Model/Datecheck';

@Component({
  selector: 'app-newapplication',
  templateUrl: './newapplication.component.html',
  styleUrls: ['./newapplication.component.css']
})
export class NewapplicationComponent implements OnInit {
  companyOptions: any[] = [];

  myform !: FormGroup;
  constructor(private formBuilder:FormBuilder,private toastr: ToastrService,private loginservice:LoginserviceService,private router:Router){
    this.myform = this.formBuilder.group({
      userName: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(25)]],
      officialEmail:['',[Validators.required,Validators.email,Validators.minLength(8),Validators.maxLength(50)]],

      phoneNumber: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^9\d{9}$/)]],
      designation: ['', [Validators.required]],
      companyId: ['', [Validators.required,Validators.maxLength(10)]],

      role: ['', [Validators.required]],
      employeeId: ['', [Validators.required,Validators.maxLength(10)]],
      aadharNumber: ['', [Validators.required,Validators.maxLength(12),Validators.minLength(12),]],

      licenseNo: ['', [Validators.required,Validators.maxLength(10),Validators.minLength(10),  Validators.pattern(/^[A-Za-z]{3}\d{4}[A-Za-z]{3}$/)    ]],
      expirationDate: ['', [Validators.required,futureDateValidator]],
      rTA: ['', [Validators.required,Validators.maxLength(20)]]
      
    });
  }
  ngOnInit():void{
    
   this.loginservice.getCompany().subscribe( (data:any) => {
    this.companyOptions = data;
    //console.log(this.companyOptions);
  },
  (error:any) => {
    this.toastr.error("Error retrieving company options",error)
  }
);
  }
  toCreate(){
    //console.log(this.myform.controls['expirationDate'].errors!==null);
    const data=this.myform.value;
    // const user:any={userName:data.userName,officialEmail:data.officialEmail,phoneNumber:data.phoneNumber,designation:data.designation,role:data.role,employeeId:data.employeeId,aadharNumber:data.aadharNumber,applicationStatus:"New",companyId:parseInt(data.companyId)};
     //console.log(user);
    const drivinglicense={licenseNo:data.licenseNo,expirationDate:data.expirationDate,rTA:data.rTA,allowedVehicles:"bike"};
    //console.log(drivinglicense);
    const userdetails={userName:data.userName,officialEmail:data.officialEmail,phoneNumber:data.phoneNumber,designation:data.designation,role:data.role,employeeId:data.employeeId,aadharNumber:data.aadharNumber,applicationStatus:"New",company:{id:parseInt(data.companyId)},drivinglicense:drivinglicense};
    console.log("userdertails",userdetails)
    if(this.myform.valid){
    this.loginservice.saveData(userdetails).subscribe(
      (data:any)=>{
        //console.log(data)
        if(data.status==200){
      alert(data.body);
      this.myform.reset();
    }
    },
      (error:any)=>{console.log(error),
      alert(error.body);
    }

    );
  }
}
   get userName(){return this.myform.get('userName');}


}
