import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../service/loginservice.service';
import { Subject } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-applicationrequestlist',
  templateUrl: './applicationrequestlist.component.html',
  styleUrls: ['./applicationrequestlist.component.css']
})
export class ApplicationrequestlistComponent implements OnInit{
  isloggedin:any='';
   employees:any;
    dtoptions : DataTables.Settings = {};
    dtTrigger :Subject<any> =new Subject<any>();
  constructor(private router:Router,private service:LoginserviceService,private toastr: ToastrService){

  }
  ngOnInit(): void {
    this.isloggedin=sessionStorage.getItem('isloggedin');
    console.log(this.isloggedin);
    if(this.isloggedin==='true'){
      this.getList();


    }
    else{
      this.toastr.error("login ");
      this.router.navigate(['login']);

    }
        
  // $(function(){
  //   $('#datatable').DataTable();
  // });
  // this.getList();

  }
  getList(){

    this.service.getemployees().subscribe(
        (data:any) => {
          this.employees = data;
        },
        (error:void) => {
          console.log(error);
        }
      );
  
    }
    view(id:number){
      this.router.navigate(['user',id]);
    }
    logout(){
      sessionStorage.setItem("isloggedin","false");
      this.router.navigate(['login']);
    }
}
