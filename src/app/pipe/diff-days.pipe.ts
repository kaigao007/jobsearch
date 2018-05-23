import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diffDays'
})
export class DiffDaysPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    value = value.replace(/-/g,",");


    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    let firstDate = new Date(value);
    // console.log(firstDate);

    var secondDate = new Date();
    // console.log(secondDate)

    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));

    // console.log(diffDays-1);


    return diffDays-1;
  }

}
