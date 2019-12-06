import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthUploadService} from "../../services/upload/auth-upload.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  constructor(private authUploadService:AuthUploadService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    const pass = next.paramMap.get('password');
    return this.authUploadService.authAdmin(pass);
  }

}
