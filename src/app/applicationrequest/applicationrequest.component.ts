import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginserviceService } from '../service/loginservice.service';
import { error } from 'jquery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-applicationrequest',
  templateUrl: './applicationrequest.component.html',
  styleUrls: ['./applicationrequest.component.css']
})
export class ApplicationrequestComponent {
  user:any=[];
  constructor(private router:Router,private toastr: ToastrService,private service:LoginserviceService,private route:ActivatedRoute ){}
  ngOnInit():void{
    this.service.getById(this.route.snapshot.params['id']).subscribe(
      (data)=> {console.log(data)

      this.user = data;
      console.log(this.user)
    }
      ,error=>console.log(error));
    


  }
//   onSubmit(data:string){
    // this.toastr.success('This is a success message', 'Success');

//     const result={userId:this.user.userId,applicationStatus:data};
//     console.log(result);
//     this.service.approval(result).subscribe(
//       response => {
//         console.log(response);
//         // alert("Update successful");
//         this.toastr.success('This is a success message', 'Success');
//         this.router.navigate(['list']);
//       },
//       (error:void) => {
//         console.log(error);
//         alert("Sorry, Server Error");

//         this.router.navigate(['list']);

//       }
//     );
    

// }
onSubmit(data:string){
  const result={userId:this.user.userId,applicationStatus:data};
  console.log(result);
  this.service.approval(result).subscribe((res)=>{
    console.log(res);
    this.toastr.success(res);
      this.router.navigate(['list']);

  },(err:any)=>{
    console.log(err);
    this.toastr.error("You are not login");
    this.router.navigate(['list']);

  })
}
}
