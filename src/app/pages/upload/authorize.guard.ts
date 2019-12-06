import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizeService} from "../../services/login/authorize.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {NzMessageService} from "ng-zorro-antd";
import {ReloginService} from "../../services/login/relogin.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private authorizeService:AuthorizeService,
              private route: Router,
              private message: NzMessageService,
              private reloginService: ReloginService){ }
  canActivate(): Observable<boolean> {
    return this.authorizeService.authorize().pipe(
      map((authorize:boolean)=>{
        if(!authorize){
          this.route.navigate(['/home']);
          this.reloginService.relogin();
          this.message.error('please login at first')
        }
        return authorize;
      })
    );
  }

}
