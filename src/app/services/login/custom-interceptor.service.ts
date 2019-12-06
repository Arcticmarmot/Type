import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReloginService} from "./relogin.service";


@Injectable({
  providedIn: 'root'
})
export class CustomInterceptorService implements HttpInterceptor{
  private cookieState: boolean;
  constructor(private reloginService:ReloginService) {
    //this.cookieState = navigator.cookieEnabled;
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if(this.cookieState !== navigator.cookieEnabled){
    //   this.reloginService.update();
    //   console.log(navigator.cookieEnabled)
    //   this.cookieState = navigator.cookieEnabled;
    // }
    req = req.clone({
      withCredentials: true
    });

    return next.handle(req);
  }
}
