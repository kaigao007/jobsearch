import { Component, OnInit, ElementRef } from '@angular/core';
import {Observable} from "rxjs";
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-job-desc-page',
  templateUrl: './job-desc-page.component.html',
  styleUrls: ['./job-desc-page.component.css']
})
export class JobDescPageComponent implements OnInit {
  jobId:number;
  job:any;
  url:string = "https://www.youtube.com/embed/6p45ooZOOPo?autoplay=1";
  // videoURL:string = "https://www.youtube.com/watch?v=NuIAYHVeFYs";
  videoURL:string = "https://www.youtube.com/embed/iHhcHTlGtRs";


  safeURL:any;
  constructor(private dataService:DataService,
              // private elementRef: ElementRef,
              private routeInfo:ActivatedRoute,
              private _sanitizer: DomSanitizer
    ) {
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
      // this.videoURL.replace("watch?v=","v/")
    // document.getElementById("testScript").remove();
    //     var testScript = document.createElement("script");
    //     testScript.setAttribute("id", "testScript");
    //     testScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/granim/1.1.0/granim.min.js");
    //     document.body.appendChild(testScript);

  }

  ngOnInit() {
    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "https://cdnjs.cloudflare.com/ajax/libs/granim/1.1.0/granim.min.js";
    // this.elementRef.nativeElement.appendChild(s);


    this.jobId = this.routeInfo.snapshot.params["id"];
    this.job = this.dataService.getJob(this.jobId);
    console.log(this.job);

    // location.reload();
    // let win = (window as any);
    //  if(win.location.search !== '?loaded' ) {
    //      win.location.search = '?loaded';
    //      win.location.reload();
    //  }
    // this.refreshPage();

  }

  refreshPage(){
    // location.reload();

  }


  // ngOnInit1() {
  //   // var s = document.createElement("script");
  //   // s.type = "text/javascript";
  //   // s.src = "../assets/js/granim.min.js";
  //   // this.elementRef.nativeElement.appendChild(s);
  //   //Add a script tag to the DOM
  //   let script = document.createElement('script');
  //   document.body.appendChild(script);
  //
  //   //listen for the load event on the script...
  //   Observable.fromEvent(script,'load').first().subscribe(
  //         //...and call onScriptLoad once the script is loaded
  //         ()=>this.onScriptLoad()
  //   );
  //
  //   //set script source: will trigger the download
  //   script.src = "https://cdnjs.cloudflare.com/ajax/libs/granim/1.1.0/granim.min.js";
  // }
  // onScriptLoad(){}

}
