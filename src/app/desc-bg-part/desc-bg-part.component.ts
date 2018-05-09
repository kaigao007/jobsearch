import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-desc-bg-part',
  templateUrl: './desc-bg-part.component.html',
  styleUrls: ['./desc-bg-part.component.css']
})
export class DescBgPartComponent implements OnInit {

  @ViewChild("rendererAppendToChildElement") rendererAppendToChildEl: ElementRef;

  constructor(private _renderer2: Renderer2) { }

  ngOnInit() {
    let formScript = this._renderer2.createElement('script');
    // formScript.type = `text/javascript`;
    formScript.src = `https://cdnjs.cloudflare.com/ajax/libs/granim/1.1.0/granim.min.js`;
    this._renderer2.appendChild(this.rendererAppendToChildEl.nativeElement,formScript);
  }

}
