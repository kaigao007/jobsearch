import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeMinus'
})
export class RemoveMinusPipe implements PipeTransform {

  transform(value: string, args?: any): any {


    return value.replace(/_/g, " ");
  }

}
