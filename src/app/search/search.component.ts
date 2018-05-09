import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { AuthInterceptor } from '../interceptors/auth.service';
import { DataService } from '../shared/data.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  url:string = "https://app.tradedesk.io/api/job?search=&location__city=Ottawa";

  dataSource:Observable<any>;
  jobs:Array<any> = [];

  constructor(
              private dataService: DataService

  ) {

    // let myHeaders: Headers = new Headers();
    // myHeaders.append("Authorization", "Token 111bb68520a5f7fe63fbd85325118c5f25e56d9e");
    //
    // let myHeaders2:HttpHeaders =new HttpHeaders();
    // myHeaders2.append("Authorization", "Token 111bb68520a5f7fe63fbd85325118c5f25e56d9e");
    //
    //
    // let newHeaders = new Headers({
    //                               "Authorization": "Token 111bb68520a5f7fe63fbd85325118c5f25e56d9e"
    //
    //                             });


    // this.dataSource = this.http.get("https://app.tradedesk.io/api/job?search=&location__city=Ottawa", {headers: newHeaders})
    //   .map((res)=>res.json());
   // this.dataSource = this.authHttp.get("https://app.tradedesk.io/api/job?search=&location__city=Ottawa", {headers: myHeaders2})
   //   // .map((res)=>res.json(res));
   //   .map(data => data);


    // this.dataSource = this.http.get("https://trackr-pa.firebaseio.com/pausers.json")
    //   .map((res)=>res.json());



  }

  ngOnInit() {
    this.dataService.getJobs()
      .subscribe(
        (data)=> {
          console.log(data);
        }
      )
    // this.authInterceptor.intercept(this.url, )
    //   .subscribe()
    // this.dataSource.subscribe(
    //   (data)=>{this.jobs = data;
    //     console.log(this.jobs);
    //   }
    // )

  }
  linkOnCliked(){
    location.reload();

  }
  onSubmit(value:any){
    console.log(value);

  }

}
