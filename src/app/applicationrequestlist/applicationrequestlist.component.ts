import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../service/loginservice.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-applicationrequestlist',
  templateUrl: './applicationrequestlist.component.html',
  styleUrls: ['./applicationrequestlist.component.css']
})
export class ApplicationrequestlistComponent implements OnInit{
  
   employees:any;
    dtoptions : DataTables.Settings = {};
    dtTrigger :Subject<any> =new Subject<any>();
  constructor(private router:Router,private service:LoginserviceService){

  }
  ngOnInit(): void {
      this.getList();
        
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
}
