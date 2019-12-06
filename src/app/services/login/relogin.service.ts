import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReloginService {
  private reloginInformation = new Subject();
  private authUpdate = new Subject();
  reloginInformation$ = this.reloginInformation.asObservable();
  authUpdate$ = this.authUpdate.asObservable();
  constructor() { }

  relogin(){
    this.reloginInformation.next('relogin');
  }
  update(){
    this.authUpdate.next('authUpdate');
  }

}
