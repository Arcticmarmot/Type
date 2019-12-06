import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'speed'
})
export class SpeedPipe implements PipeTransform {

  transform(speed: number): string {
    let integerSpeed = Math.floor(speed);
    integerSpeed = integerSpeed>0?integerSpeed:0;
    integerSpeed = integerSpeed<9999?integerSpeed:9999;
    return integerSpeed + ' /min';
  }

}
