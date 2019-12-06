import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SendMailService} from "../../services/login/send-mail.service";
import {NzMessageService} from "ng-zorro-antd";
import {RegisterService} from "../../services/login/register.service";
import {LoginService} from "../../services/login/login.service";
import {PASSWORDPATTERN, PINPATTERN} from "../../utils/constants";
import {ResetService} from "../../services/login/reset.service";
import {ReloginService} from "../../services/login/relogin.service";

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.less']
})
export class ResetComponent implements OnInit {
  pinButtonStr = 'Get PIN';
  isSent = false;
  resetFormData = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(PASSWORDPATTERN)]],
    pin: ['',[Validators.required,Validators.pattern(PINPATTERN )]],
  });
  isCookieEnable: boolean;
  constructor(private fb: FormBuilder,
              private sendMailService: SendMailService,
              private message: NzMessageService,
              private resetService: ResetService,
              private reloginService: ReloginService) {
  }

  ngOnInit() {
    this.isCookieEnable = navigator.cookieEnabled;
  }
  getPIN() {
    this.isSent = true;
    this.countDown();
    this.sendEmail();
  }

  countDown(){
    let sec = 10;
    const countDown = setInterval(()=>{
      this.pinButtonStr = sec+'';
      if(sec===0){
        this.pinButtonStr='Resend';
        clearInterval(countDown);
        this.isSent = false;
      }
      sec--;
    },1000);
  }
  sendEmail(){
    this.sendMailService.send(this.resetFormData.controls['email'].value).subscribe(
      (res)=>{
      },
      (err)=>{
        this.message.error(err.statusText);
      }
    );
  }
  onResetSubmit() {
    this.resetService
      .reset(
        {email: this.resetFormData.controls['email'].value,
          password:this.resetFormData.controls['password'].value,
          pin: this.resetFormData.controls['pin'].value}).subscribe(
      (res)=>{
        this.reloginService.update();
        this.message.success(res.text);
      },
      (err)=>{
        if(err.error.text === 'Wrong pin'){
          this.resetFormData.controls['pin'].setErrors({wrong: true});
        }
        this.message.error(err.statusText);
      }
    )
  }

}
