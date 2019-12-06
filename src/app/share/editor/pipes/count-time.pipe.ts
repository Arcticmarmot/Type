import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countTime'
})
export class CountTimePipe implements PipeTransform {

  transform(countTime: number): string {
    const second = Math.floor(countTime/1000);
    if(second<59){
      return '00:'+this.format(second);
    }else{
      const minute = Math.floor(second / 60);
      if(minute<59)
        return this.format(minute)+ ':' + this.format(second%60);
      else
        return 'Time for rest'
    }
  }
  format(n: number){
    return n < 10? '0'+n: ''+n;
  }

}
