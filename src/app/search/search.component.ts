import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data.service';
import { Http,Headers, Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  urlBase:string = "https://app.tradedesk.io/api/job";

  jobs:any;
  dataSource:any;
  jobsStatic:Array<any> = [];
  parser = new DOMParser();
  keyword:string = "";
  city:string = "";
  locationLong:string = "";

  constructor(  private http: Http,
                private dataService:DataService
  ) {}

  getJobsLocal(keyword:string, location:string){
    let myHeaders: Headers = new Headers();
    myHeaders.append("Authorization", "Token 111bb68520a5f7fe63fbd85325118c5f25e56d9e");
    console.log(keyword);
    console.log(location);
    console.log(this.urlBase+"?search="+ keyword +location)

    // return this.http.get("https://app.tradedesk.io/api/job?search=&location__city=Ottawa", {headers: myHeaders})
    return this.http.get(this.urlBase+"?search="+ keyword +location +"&page_size=20" , {headers: myHeaders})

    .map(
      (response: Response) => {
        const data = response.json();
        this.dataSource = data;
        return data;
      }
    )
  }

  ngOnInit() {

        this.jobs = this.dataService.getJobs();
        console.log(this.jobs);

    // this.getJobsLocalLocal()
    //   .subscribe(
    //     (data)=> {
    //       this.dataSource = data.results;
    //       console.log(this.dataSource);
    //       console.log(data);
    //     }
    //   )

    // console.log(this.dataSource);
    //
    // console.log(this.dataService.getStaticData().results);
    // this.jobsStatic = this.dataService.getStaticData().results;
    // console.log(this.jobsStatic[0].description);
    // console.log(this.jobsStatic[0].description);

//     const htmlDoc = this.parser.parseFromString(this.jobsStatic[0].description, "text/html");
//     const summary = htmlDoc.getElementsByTagName('span')[1].innerHTML.replace(/<br>/g, " ");
// console.log(summary);
// replace this.str with the string you want to parse

    // console.log(this.jobsStatic[0].description.getElementsByTagName("span")[1].innerHTML );

  }
  // onClick(){
  //   this.dataService.getJobs()
  //     .subscribe(
  //       (jobs: any[])=> {
  //         console.log(jobs);
  //         this.dataSource = jobs;
  //         console.log(jobs[0].title);
  //       },
  //       (error) => console.log(error)
  //
  //
  //     )
  // }


  onSubmit(value:any){
    // console.log(value);
    this.keyword = value.keyword;
    // this.city = value.location;

    //capitalize location city
    // console.log(value.location);
    const location = value.location.charAt(0).toUpperCase() + value.location.toLowerCase().slice(1);
    console.log(location);
    if(location){
       this.locationLong = "&location__city=" +  location;
    }

    this.dataService.getJobsFromTradedesk(value.keyword, this.locationLong)
      .subscribe(
        (data)=>{
          // this.dataSource = data;
          this.jobs = data;
          // console.log(data);
        }
      )

    // this.getJobsLocal(value.keyword, this.locationLong)
    //   .subscribe(
    //     (data)=> {
    //       this.dataSource = data.results;
    //       console.log(this.dataSource);
    //       console.log(data);
    //     }
    //   )

    this.locationLong = "";
    value.keyword = "";
  }

}
