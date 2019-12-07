import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NzIconModule, NzMessageModule} from "ng-zorro-antd";
import {MatButtonModule} from "@angular/material/button";
import {CookieService} from "ngx-cookie-service";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NzIconModule,
    MatButtonModule,
    RouterModule,
    NzMessageModule,
  ],
  entryComponents: [LoginComponent],
  providers: [CookieService]
})
export class LoginModule { }
