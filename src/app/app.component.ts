import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'loginsignup';
  isloggedin: any=false;
  ngOnInit(): void {
    const islogged=sessionStorage.getItem('isloggedin');
    console.log(islogged);
    if(islogged==='true'){
      // this.getList();
this.isloggedin=true

    }
  }
}
