import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rightPercent'
})
export class RightPercentPipe implements PipeTransform {

  transform(rightPercent): string {
    let percent = Math.ceil(100-rightPercent);
    percent = percent>100? 100: percent;
    percent = percent<0? 0: percent;
    return percent+' %';
  }

}
