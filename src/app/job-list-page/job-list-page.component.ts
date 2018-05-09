import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-job-list-page',
  templateUrl: './job-list-page.component.html',
  styleUrls: ['./job-list-page.component.css']
})
export class JobListPageComponent implements OnInit {

  @ViewChild("rendererAppendToChildElement") rendererAppendToChildEl: ElementRef;

  constructor(private _renderer2: Renderer2) { }

  ngOnInit() {
    let formScript = this._renderer2.createElement('script');
    formScript.type = `text/javascript`;
    formScript.text = `
      hbspt.forms.create({
        portalId: "3221062",
        formId: "4b5baabf-8510-49ff-ace0-c9e6bef12ae4",
        css: ""
      });
    `
    this._renderer2.appendChild(this.rendererAppendToChildEl.nativeElement,formScript);
  }
}
