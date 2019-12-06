import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ResultService} from "../../../services/other/result.service";
import {NzMessageService} from "ng-zorro-antd";
import {transRightPercent, transSpeed, transTime} from "../../../utils/transform";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.less']
})
export class StatisticsComponent implements OnInit {
  @Output() auth = new EventEmitter();
  options;
  isAuth = false;
  constructor(private resultService: ResultService,
              private message: NzMessageService) {
    this.resultService.getResult().subscribe(
      (res)=>{
        if(res.text === 'unauthorized'  || !res.length) return;
        this.auth.emit({speed:res[0].speed,countTime:res[0].countTime,rightPercent:res[0].rightPercent});
        this.isAuth = true;
        const statis = this.transRecord(res);
        this.options = {
          xAxis: {
            type: 'category',
            data: statis.statisDate,
          },
          yAxis: {
            type: 'value'
          },
          legend: {
            data:['speed','accuracy']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          tooltip: {
            trigger: 'axis'
          },
          series: [
            {
            name: 'speed',
            data: statis.statisSpeed,
            type: 'line',
            smooth: true,
            },
            {
              name: 'accuracy',
              data: statis.statisRightPercent,
              type: 'line',
              smooth: true
            }]
        };
      },
      (err)=>{
        this.message.error(err.statusText);
      }
    );
  }

  ngOnInit() {
  }
  transRecord(records) {
    records.reverse();
    const statisSpeed = [];
    const statisRightPercent = [];
    const statisDate = [];
    for(const i in records){
      statisSpeed.push(transSpeed(records[i].speed));
      statisRightPercent.push(transRightPercent(records[i].rightPercent));
      statisDate.push(transTime(records[i].createDate));
    }
    return {statisSpeed:statisSpeed, statisRightPercent:statisRightPercent,statisDate:statisDate};
  }
}
