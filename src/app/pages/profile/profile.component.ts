import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../services/other/profile.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NzMessageService} from "ng-zorro-antd";
import {map} from "rxjs/operators";
import {User} from "../../services/data-types/user";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {ReloginService} from "../../services/login/relogin.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less']
})
export class ProfileComponent implements OnInit {
  user: User;
  formData = this.fb.group({
    username: ['',[Validators.required,Validators.minLength(2)]],
  });

  constructor(private activatedRoute: ActivatedRoute,
              private message: NzMessageService,
              private fb: FormBuilder,
              private profileService: ProfileService,
              private route:Router,
              private reloginService:ReloginService) {
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(map(data=>data.profileResolve)).subscribe(
      (res)=>{
        if(res){
          this.user = res;
          this.formData = this.fb.group({
            username: [this.user.username,[Validators.required,Validators.minLength(2)]],
          });
        }
      }
    )
  }

  onSubmit() {
    this.profileService.postProfile({username: this.formData.controls['username'].value}).subscribe(
      res=>{
        this.message.success(res.text);
      },
      err=>{
        console.log(err)
        if(err.error.text==='unauthorized'){
          this.route.navigate(['/home']);
          this.reloginService.relogin();
        }
        this.message.error(err.statusText);
      }
    )
  }
}
