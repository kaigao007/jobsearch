import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as firebase from 'firebase';

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

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAMhHQvnZCQJycAFNL_Bb9XocxkZgBsYOo",
      authDomain: "jobsearch-1db15.firebaseapp.com",
      databaseURL: "https://jobsearch-1db15.firebaseio.com",
      projectId: "jobsearch-1db15",
      storageBucket: "jobsearch-1db15.appspot.com",
      messagingSenderId: "217386845724"

    });

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
