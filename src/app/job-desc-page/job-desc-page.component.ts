import { Component, OnInit, ElementRef } from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-job-desc-page',
  templateUrl: './job-desc-page.component.html',
  styleUrls: ['./job-desc-page.component.css']
})
export class JobDescPageComponent implements OnInit {

  constructor(private elementRef: ElementRef) {
    document.getElementById("testScript").remove();
        var testScript = document.createElement("script");
        testScript.setAttribute("id", "testScript");
        testScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/granim/1.1.0/granim.min.js");
        document.body.appendChild(testScript);
  }

  ngOnInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/granim/1.1.0/granim.min.js";
    this.elementRef.nativeElement.appendChild(s);


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


  ngOnInit1() {
    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "../assets/js/granim.min.js";
    // this.elementRef.nativeElement.appendChild(s);
    //Add a script tag to the DOM
    let script = document.createElement('script');
    document.body.appendChild(script);

    //listen for the load event on the script...
    Observable.fromEvent(script,'load').first().subscribe(
          //...and call onScriptLoad once the script is loaded
          ()=>this.onScriptLoad()
    );

    //set script source: will trigger the download
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/granim/1.1.0/granim.min.js";
  }
  onScriptLoad(){}
}
