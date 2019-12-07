import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NZ_I18N,
  NzDropDownModule,
  NzIconModule,
  NzLayoutModule, NzMessageService, NzMessageServiceModule,
  zh_CN
} from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import {ServicesModule} from "./services/services.module";
import {PagesModule} from "./pages/pages.module";
import {ShareModule} from "./share/share.module";
import {CookieService} from "ngx-cookie-service";
import {HomeModule} from "./pages/home/home.module";
import {LoginModule} from "./share/login/login.module";

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    HomeModule,
    LoginModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzDropDownModule,
    NzIconModule,
    NzLayoutModule,
    NzMessageServiceModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    CookieService],

  bootstrap: [AppComponent]
})
export class AppModule { }
