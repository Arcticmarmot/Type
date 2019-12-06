import { Component, OnInit } from '@angular/core';
import {RecordService} from "../../services/other/record.service";
import {NzMessageService} from "ng-zorro-antd";
import {transCountTimeToString, transRightPercent, transSpeed, transTimeToDate} from "../../utils/transform";
import {QueryRecordService} from "../../services/other/query-record.service";
import {RecordStatis} from "../../services/data-types/record";

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.less']
})
export class RecordComponent implements OnInit {
  private isAuth: boolean = false;
  typingTime = '';
  dateRange: Date[];
  recordStatis: RecordStatis;
  constructor(private recordService:RecordService,
              private message:NzMessageService,
              private queryRecordService: QueryRecordService) {
    this.recordService.getRecord().subscribe(
      res=>{
        this.typingTime = transCountTimeToString(res.typingTime);
      },
      err=>{
        this.message.error(err.statusText);
      }
    )
  }

  ngOnInit() { }

  auth() {
    this.isAuth = true;
  }

  onDateChange() {
    if(this.dateRange.length) {
      const dr = [
        transTimeToDate(this.dateRange[0].getFullYear(),
          this.dateRange[0].getMonth(),
          this.dateRange[0].getDay()),
        transTimeToDate(this.dateRange[1].getFullYear(),
          this.dateRange[1].getMonth(),
          this.dateRange[1].getDay() + 1)]
      this.queryRecordService.getRecordByQuery(dr).subscribe(
        res => {
          console.log(res);
          this.recordStatis = {
            meanSpeed: transSpeed(res.meanSpeed) + ' /min',
            meanRightPercent: transRightPercent(res.meanRightPercent) + ' %',
            sumCountTime: transCountTimeToString(res.sumCountTime)
          }
          console.log(this.recordStatis)
        },
        err => {
          this.message.error(err.statusText);
        }
      )
    }
  }
}
