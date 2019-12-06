import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordRoutingModule } from './record-routing.module';
import { RecordComponent } from './record.component';
import {ResultModule} from "../result/result.module";
import {NzDatePickerModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [RecordComponent],
  imports: [
    CommonModule,
    RecordRoutingModule,
    ResultModule,
    NzDatePickerModule,
    FormsModule
  ]
})
export class RecordModule { }
