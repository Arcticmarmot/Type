import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {EMPTY, Observable, of} from "rxjs";
import {ProfileService} from "../../services/other/profile.service";
import {NzMessageService} from "ng-zorro-antd";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class ProfileResolveService implements Resolve<any>{

  constructor(private profileService:ProfileService,
              private route: Router,
              private message: NzMessageService) { }

  resolve() {
    return this.profileService.getProfile().pipe(
      /*
      catchError(err => {
        console.log(err);
        if(err.error.text === 'login again') {

          this.route.navigate(['/home']);
          this.message.warning(err.statusText);
        }
        return of(null);
      })*/
    )
  }
}
