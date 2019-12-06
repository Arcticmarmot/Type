import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PANEL} from "../../utils/share";
import {CookieService} from "ngx-cookie-service";
import {TypingResult} from "../../services/data-types/article";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less']
})
export class ResultComponent implements OnInit {
  id;
  articleAuth;
  result: TypingResult;
  private isAuth: boolean = false;
  constructor(private route: ActivatedRoute,
              private cookie: CookieService,) {
    if(this.cookie.get('article_id')&&this.cookie.get('articleAuth')&& this.cookie.get('result')){
      this.id = this.cookie.get('article_id');
      this.articleAuth = this.cookie.get('articleAuth');
      const result  = this.cookie.get('result').split(' ');
      this.result = {speed: Number(result[0]), countTime: Number(result[1]), rightPercent:Number(result[2])};
      this.cookie.delete('result');
      this.cookie.delete('articleAuth');
    }else{
      this.id = PANEL.id;
      this.articleAuth = PANEL.auth;
      this.result = PANEL.result;
      PANEL.result = {countTime:0,speed:0,rightPercent:0};
    }
  }

  ngOnInit() {
  }
  auth(res:TypingResult) {
    this.result = res;
    this.isAuth = true;
  }
}
