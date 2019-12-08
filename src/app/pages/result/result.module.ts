import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultComponent} from "./result.component";
import {ResultRoutingModule} from "./result-routing.module";
import {EditorModule} from "../../share/editor/editor.module";
import {NzButtonModule, NzIconModule, NzResultModule} from "ng-zorro-antd";
import { StatisticsComponent } from './statistics/statistics.component';
import {NgxEchartsModule} from 'ngx-echarts'



@NgModule({
  declarations: [ResultComponent, StatisticsComponent],
  exports: [
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    EditorModule,
    NzResultModule,
    NzButtonModule,
    NzIconModule,
    NgxEchartsModule
  ]
})
export class ResultModule { }
