import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule} from "@angular/forms";
import {EditorModule} from "./editor/editor.module";
import {LoginModule} from "./login/login.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    EditorModule,
    LoginModule
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    EditorModule,
    LoginModule
  ]
})
export class ShareModule { }
