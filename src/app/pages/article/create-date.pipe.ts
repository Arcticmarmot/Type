import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'createDate'
})
export class CreateDatePipe implements PipeTransform {

  transform(value: string): any {
    return value.slice(0,10);
  }

}
