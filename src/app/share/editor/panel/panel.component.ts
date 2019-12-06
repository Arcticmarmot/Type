import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { Router} from "@angular/router";
import {PANEL} from "../../../utils/share";
import {ResultService} from "../../../services/other/result.service";
import {CookieService} from "ngx-cookie-service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.less']
})
export class PanelComponent implements OnInit,OnChanges,OnDestroy {
  @Input() startTime;
  @Input() words;
  @Input() cp;
  @Input() isSubmitKeyDown;
  @Input() isTimeToEnter;
  countTime = 0;
  speed = 0;
  rightPercent = 100;
  countTimeInterval;
  speedInterval;
  rightPercentInterval;
  sentenceLength: Array<number> = [];
  sentenceErrorLength: Array<number> = [];
  constructor(private router: Router,
              private resultService: ResultService,
              private cookieService: CookieService,
              private message: NzMessageService){
    this.countTimeInterval = setInterval(() => {
      this.getCountTime();
    },200);
    this.speedInterval = setInterval(() => {
      this.getSpeed();
    }, 2000);
    this.rightPercentInterval = setInterval(() => {
      this.getRightPercent();
    },2000);
  }

  ngOnInit() {
    for(const s in this.words) {
      this.sentenceLength.push(this.words[s].filter(e => e.state !== 'unknown').length);
    }
  }
  private getCountTime(){
    if(this.startTime){
      this.countTime = new Date().getTime() - this.startTime;
    }else{
      this.countTime = 0;
    }
  }
  private getSpeed() {
    if(this.countTime && this.words && this.cp){
      this.speed = this.getWordCount()*1000 / (this.countTime/60);
    }else{
      this.speed = 0;
    }
  }
  private getRightPercent() {
    const wordCount = this.getWordCount();
    if(this.countTime && this.words && this.cp && wordCount){
      this.rightPercent = (this.getErrorWordCount() / wordCount) * 100;
    }else{
      this.rightPercent = 100;
    }
  }
  private getWordCount(){
    return this.getSum(this.sentenceLength.slice(0,this.cp[0]))+this.cp[1];
  }
  private getTypedErrorWordCount(){
    const slice = this.words.slice(this.sentenceErrorLength.length,this.cp[0]);
    if(slice){
      for(const s in slice){
        this.sentenceErrorLength.push(slice[s].filter(e => e.state === 'typed-error').length);
      }
    }
    return this.getSum(this.sentenceErrorLength);
  }
  private getErrorWordCount(){
    let sum = 0;
    for(const i in this.words[this.cp[0]].slice(0,this.cp[1])){
      if(this.words[this.cp[0]][i].state === 'typed-error') {
        sum += 1;
      }
    }
    return this.getTypedErrorWordCount() + sum;
  }
  private getSum(arr: Array<number>){
    let sum = 0;
    arr.forEach(e => {
      sum += e;
    });
    return sum;
  }
  submit(){
    const res = {speed:this.speed,countTime:this.countTime,rightPercent:this.rightPercent};
    PANEL.result = res;
    this.cookieService.set('result',`${res.speed} ${res.countTime} ${res.rightPercent}`);
    this.resultService.postResult(res).subscribe(
      (res)=>{
        if(res.text){
          if(res.text === 'unauthorized'){
            this.router.navigate(['/result']);
          }else{
            this.message.success(res.text);
          }
        }
        this.router.navigate(['/result']);
      },
      (err) => {
        this.message.error(err.statusText);
        this.router.navigate(['/result']);
      }
    );

  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isSubmitKeyDown']){
      if(this.isSubmitKeyDown){
        this.submit();
      }
    }
  }
  ngOnDestroy(): void {
    clearInterval(this.countTimeInterval);
    clearInterval(this.speedInterval);
    clearInterval(this.rightPercentInterval)
  }





}
/*
@Input() startTime;
  @Input() words;
  @Input() cp;
  @Input() isSubmitKeyDown;
  errorCount: Array<number> = new Array<number>();
  countTime = 0;
  speed = 0;
  rightPercent = 100;
  countTimeInterval;
  speedInterval;
  rightPercentInterval;
  panelWords: Array<Array<Word>> = [];
  constructor(private router: Router){
    this.countTimeInterval = setInterval(() => {
      this.getCountTime();
    },200)
    this.speedInterval = setInterval(() => {
      this.getSpeed();
    }, 2000)
    this.rightPercentInterval = setInterval(() => {
      this.getRightPercent();
    },2000)
  }

  ngOnInit() {
    for(const s in this.words){
      this.panelWords.push(this.words[s].filter(e=> e.state !== 'unknown'));
    }
  }
  private getCountTime(){
    if(this.startTime){
      this.countTime = new Date().getTime() - this.startTime;
    }else{
      this.countTime = 0;
    }
  }
  private getSpeed() {
    if(this.countTime && this.words && this.cp){
      this.speed = this.getWordCount()*1000 / (this.countTime/60);
    }else{
      this.speed = 0;
    }
  }
  private getRightPercent() {
    const wordCount = this.getWordCount();
    if(this.countTime && this.words && this.cp && wordCount){
      this.rightPercent = (this.getErrorWordCount() / wordCount) * 100;
    }else{
      this.rightPercent = 100;
    }
  }
  private getWordCount(){
    let sum = 0;
    if(!this.cp[0]){
      return this.cp[1];
    }else{
      for(const sentence in this.words.slice(0,this.cp[0])){
        sum += this.words[sentence].length;
      }
      sum += this.cp[1];
      return sum;
    }
  }

  private getErrorWordCount(){
    let sum = 0;
    if(this.cp[1]){
      for(const i in this.words[this.cp[0]]){
        if(this.words[this.cp[0]][i].state === 'typed-error') {
          sum+=1;
        }
      }
    }
    if(this.errorCount.length !== this.cp[0]){
      let subSum = 0;
      for(const i in this.words[this.cp[0]-1]){
        if(this.words[this.cp[0]-1][i].state === 'typed-error') subSum+=1;
      }
      this.errorCount.push(subSum);
    }
    return this.getSum(this.errorCount) + sum;
  }
  private getSum(arr: Array<number>){
    let sum = 0;
    arr.forEach(e => {
      sum += e;
    });
    return sum;
  }
  submit(){
    PANEL.speed = this.speed;
    PANEL.countTime = this.countTime;
    PANEL.rightPercent = this.rightPercent;
    this.router.navigate(['/result'])//{queryParams: {s: Math.floor(this.speed), t: this.countTime,p:Math.ceil(this.rightPercent)}});
  }
  ngOnDestroy(): void {
    clearInterval(this.countTimeInterval);
    clearInterval(this.speedInterval);
    clearInterval(this.rightPercentInterval)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['isSubmitKeyDown']){
      if(this.isSubmitKeyDown){
        this.submit();
      }
    }
  }
 */
