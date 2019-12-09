import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReAuthorizeService {
  private reAuthorizeInformation = new Subject();
  private authUpdate = new Subject();
  reAuthorizeInformation$ = this.reAuthorizeInformation.asObservable();
  authUpdate$ = this.authUpdate.asObservable();
  constructor() { }

  reAuthorize(){
    this.reAuthorizeInformation.next('reAuthorize');
  }
  update(){
    this.authUpdate.next('authUpdate');
  }

}
