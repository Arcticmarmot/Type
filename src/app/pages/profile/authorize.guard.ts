import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {AuthorizeService} from "../../services/login/authorize.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {NzMessageService} from "ng-zorro-antd";
import {ReAuthorizeService} from "../../services/login/re-authorize.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivate {
  constructor(private authorizeService:AuthorizeService,
              private route: Router,
              private message: NzMessageService,
              private reAuthorizeService: ReAuthorizeService){ }
  canActivate(): Observable<boolean> {
    return this.authorizeService.authorize().pipe(
      map((authorize:boolean)=>{
        if(!authorize){
          this.route.navigate(['/home']);
          this.reAuthorizeService.reAuthorize();
          this.message.error('please login at first')
        }
        return authorize;
      })
    );
  }

}
