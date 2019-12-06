import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ServicesModule} from "./services/services.module";
import {PagesModule} from "./pages/pages.module";
import {ShareModule} from "./share/share.module";
import {CookieService} from "ngx-cookie-service";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
