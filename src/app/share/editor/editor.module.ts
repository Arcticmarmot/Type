import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor.component';
import { PanelComponent } from './panel/panel.component';
import { CountTimePipe } from './pipes/count-time.pipe';
import { SpeedPipe } from './pipes/speed.pipe';
import { RightPercentPipe } from './pipes/right-percent.pipe';
import {NzButtonModule, NzCardModule} from "ng-zorro-antd";
import { SpeedLineComponent } from './speed-line/speed-line.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [EditorComponent, PanelComponent, CountTimePipe, SpeedPipe, RightPercentPipe, SpeedLineComponent],
  exports: [
    EditorComponent,
    RightPercentPipe,
    CountTimePipe,
    SpeedPipe
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzButtonModule,
    RouterModule
  ]
})
export class EditorModule { }
