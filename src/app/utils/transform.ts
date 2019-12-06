export function transSpeed(speed: number):number{
  return Math.floor(speed);
}
export function transCountTime(countTime: number): number {
  return Math.floor(countTime/1000);
}

export function transRightPercent(rightPercent): number {
  let percent = Math.ceil(100-rightPercent);
  percent = percent>100? 100: percent;
  percent = percent<0? 0: percent;
  return percent;
}
export function transTime(timestamp) {
  if (timestamp) {
    const time = new Date(timestamp);
    const y = time.getFullYear(); //getFullYear方法以四位数字返回年份
    const M = format(time.getMonth() + 1); // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
    const d = format(time.getDate()); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
    const h = format(time.getHours()); // getHours方法返回 Date 对象的小时 (0 ~ 23)
    const m = format(time.getMinutes()); // getMinutes方法返回 Date 对象的分钟 (0 ~ 59)
    return y + '-' + M + '-' + d + ' ' + h + ':' + m;
  } else {
    return '';
  }
}
export function transTimeToDate(y,m,d) {
  return new Date(y,m,d).getTime();
}
export function transCountTimeToString(countTime:number){
  const second = Math.floor(countTime/1000);
  if(second<59){
    return '00:'+format(second);
  }else{
    const minute = Math.floor(second / 60);
    if(minute<59){
      return format(minute)+ ':' + format(second%60);
    } else {
      const hour = Math.floor(minute/60);
      return format(hour) + ':' + format(minute%60) + ':' +format(second%60);
    }
  }
}
function format(n: number){
  return n < 10? '0'+n: ''+n;
}
