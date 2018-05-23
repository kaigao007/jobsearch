import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractSpan'
})
export class ExtractSpanPipe implements PipeTransform {
  parser = new DOMParser();


  transform(value: string, args?: any): any {

    const htmlDoc = this.parser.parseFromString(value, "text/html");
    if(htmlDoc.getElementsByTagName('span')[1]){
      if(htmlDoc.getElementsByTagName('span')[1].innerHTML){
        const summary = htmlDoc.getElementsByTagName('span')[1].innerHTML.replace(/<br>/g, " ");
        const summaryShort =summary.substring(0, 150);
        return summaryShort.substring(0, summaryShort.lastIndexOf(" ")) + "...";

      }
    }


    // console.log(summary);

    // console.log(this.truncateStr(summary));
    return value;
  }
  //
  // truncateStr(str: string) {
  //    str = str.substring(0, str.lastIndexOf(" ")) + "...";
  //  }

}
