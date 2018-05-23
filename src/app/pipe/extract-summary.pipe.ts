import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractSummary'
})
export class ExtractSummaryPipe implements PipeTransform {
  parser = new DOMParser();

  transform(descriptionOrigin: string, args?: any): any {
    // console.log(value);
    //strip all html tags
    let stripedDescrip =  descriptionOrigin.replace(/<(?:.|\n)*?>/gm, '');
    //replace &nbsp; with space, replace &rsquo; with  ‘
  stripedDescrip = stripedDescrip.replace(/&nbsp;/gm," ");
  stripedDescrip =  stripedDescrip.replace(/&rsquo;/gmi, "'");
  //similar to above
  stripedDescrip =  stripedDescrip.replace(/&amp;/gmi, "&");
  stripedDescrip =  stripedDescrip.replace(/&mdash;/gmi, "--");



  //remove space
  stripedDescrip =  stripedDescrip.replace(/\s/gmi, " ");

    //extract text from the beginning
    let summary = stripedDescrip.substring(0,140);
    console.log(summary);

    return summary.substring(0,summary.lastIndexOf(" "))+"...";

    // const htmlDoc = this.parser.parseFromString(value,"text/html");
    // if(htmlDoc){
    //   console.log(htmlDoc);
    //   return htmlDoc;
    // }


    // return value;
  }

}
