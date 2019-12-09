import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {SendMailService} from "../../services/login/send-mail.service";
import {RegisterService} from "../../services/login/register.service";
import {LoginService} from "../../services/login/login.service";
import {PASSWORDPATTERN, PINPATTERN} from "../../utils/constants";
import {ReAuthorizeService} from "../../services/login/re-authorize.service";
import {NzMessageService} from "ng-zorro-antd";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  closeOverlay: EventEmitter<any>;
  pinButtonStr = 'Get PIN';
  isSent = false;
  loginFormData = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(PASSWORDPATTERN)]]
  });
  registerFormData = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern(PASSWORDPATTERN)]],
    pin: ['',[Validators.required,Validators.pattern(PINPATTERN)]],
  });
  state: 'Login'|'Register' = 'Login';
  isCookieEnable: boolean;
  constructor(private fb: FormBuilder,
              private sendMailService: SendMailService,
              private registerService: RegisterService,
              private loginService: LoginService,
              private reAuthorizeService: ReAuthorizeService,
              private message: NzMessageService,) {
  }

  ngOnInit() {
    this.isCookieEnable = navigator.cookieEnabled;
  }


  close() {
    this.closeOverlay.emit('closeOverlay');
  }

  changeState(s: 'Login'|'Register') {
    this.state = s;
  }

  getPIN() {
    this.isSent = true;
    this.countDown();
    this.sendEmail();
  }

  countDown(){
    let sec = 60;
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
    this.sendMailService.send(this.registerFormData.controls['email'].value).subscribe(
      (res)=>{
      },
      (err)=>{
        this.message.error(err.statusText);
      }
    );
  }
  onLoginSubmit() {
    this.loginService
      .login(
      {email:this.loginFormData.controls['email'].value,
      password:this.loginFormData.controls['password'].value}).subscribe(
      (res)=>{
        this.message.success(res.text);
        this.reAuthorizeService.update();
        this.closeOverlay.emit('closeOverlay');
      },
      (err)=>{
        if(err.error.text === 'Error account or password.'){
          this.loginFormData.controls['password'].setErrors({wrong: true});
        }
        this.message.error(err.statusText);
      }
    )
  }
  onRegisterSubmit() {
    this.registerService
      .register(
        {email: this.registerFormData.controls['email'].value,
          password:this.registerFormData.controls['password'].value,
        pin: this.registerFormData.controls['pin'].value}).subscribe(
      (res)=>{
        this.message.success(res.text);
        this.reAuthorizeService.update();
        this.closeOverlay.emit('closeOverlay');
      },
      (err)=>{
        if(err.error.text === 'Wrong pin'){
          this.registerFormData.controls['pin'].setErrors({wrong: true});
        }
        this.message.error(err.statusText);
      }
    )
  }
}
