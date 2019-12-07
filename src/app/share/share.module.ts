import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {EditorModule} from "./editor/editor.module";
import {LoginModule} from "./login/login.module";
import {NzMessageModule} from "ng-zorro-antd/message"



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    EditorModule,
    LoginModule,
    NzMessageModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    EditorModule,
    LoginModule,
    NzMessageModule,
  ],
})
export class ShareModule { }
