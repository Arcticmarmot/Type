import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-speed-line',
  animations: [
    trigger('speedChange',[
        state('s60',style({
          background: 'rgba(60,150,150,95)',
          height: 100+'px'
        })),
        state('s80',style({
          background: 'rgba(80,140,140,95)',
          height: 180+'px'
        })),
        state('s120',style({
          background: 'rgba(100,120,120,95)',
          height: 260+'px'
        })),
        state('s160',style({
          background: 'rgba(120,100,100,95)',
          height: 340+'px'
        })),
        state('s200',style({
          background: 'rgba(140,80,80,95)',
          height: 420+'px'
        })),
        state('s240',style({
          background: 'rgba(160,60,60,95)',
          height: 500+'px'
        })),
        state('s280',style({
          background: 'rgba(180,40,40,95)',
          height: 580+'px'
        })),
        state('s320',style({
          background: 'rgba(200,20,20,95)',
          height: 660+'px'
        })),
        state('s360',style({
          background: 'rgba(220,10,10,95)',
          height: 740+'px'
        })),
        state('s400',style({
          background: 'rgba(256,0,0,95)',
          height: 820+'px'
        })),
        state('default',style({
          height: 0
        })),
        transition('*=>*',[
          animate('6000ms 0ms ease-out')
        ]),
      ])
  ],
  templateUrl: './speed-line.component.html',
  styleUrls: ['./speed-line.component.less'],

})
export class SpeedLineComponent implements OnInit,OnChanges {
  @Input() speed;

  constructor() {

  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
  getSpeedState(): string{
    let state;
    if(this.speed>=400){
      state = 's400';
    }else if(this.speed>=360&&this.speed<400){
      state = 's360';
    }else if(this.speed>=320&&this.speed<360){
      state = 's320';
    }else if(this.speed>=280&&this.speed<320){
      state = 's280';
    }else if(this.speed>=240&&this.speed<280){
      state = 's240';
    }else if(this.speed>=200&&this.speed<240){
      state = 's200';
    }else if(this.speed>=160&&this.speed<200){
      state = 's160';
    }else if(this.speed>=120&&this.speed<160){
      state = 's120';
    }else if(this.speed>=80&&this.speed<120){
      state = 's80';
    }else if(this.speed>=60&&this.speed<80){
      state = 's60';
    }
    return state;
  }

}
