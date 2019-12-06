import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthUploadRoutingModule } from './auth-upload-routing.module';
import { AuthUploadComponent } from './auth-upload.component';
import {NzIconModule} from "ng-zorro-antd";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [AuthUploadComponent],
  imports: [
    CommonModule,
    AuthUploadRoutingModule,
    NzIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule
  ]
})
export class AuthUploadModule { }
