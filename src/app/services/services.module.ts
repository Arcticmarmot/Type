import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {CustomInterceptorService} from "./login/custom-interceptor.service";

export const API_CONFIG = new InjectionToken('ApiConfigToken');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: API_CONFIG, useValue: 'http://localhost:3000/'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptorService ,
      multi: true
    }
  ]
})
export class ServicesModule { }
