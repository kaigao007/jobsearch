import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // @ViewChild('rendererAppendToChildEl') rendererAppendToChildEl: ElementRef;

  constructor(
    // private _renderer2: Renderer2

  ) { }

  ngOnInit(){
  // let s = this._renderer2.createElement('script');
  //     s.type = `text/javascript`;
  //     s.text = `
  //         hbspt.forms.create({
  //             portalId: "3221062",
  //             formId: "4b5baabf-8510-49ff-ace0-c9e6bef12ae4",
  //             css: ""
  //           });
  //     `;
  //     this._renderer2.appendChild(this.rendererAppendToChildEl.nativeElement, s);
}

  title = 'app';
}
