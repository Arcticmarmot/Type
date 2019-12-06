import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticleDetail} from "../../../services/data-types/article";
import {map} from "rxjs/operators";
import {PANEL} from "../../../utils/share";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.less']
})
export class ArticleDetailComponent implements OnInit {
  articleDetail: ArticleDetail;
  isLoad: boolean;
  @Output() isTyping;
  constructor(private route: ActivatedRoute,
              private cookie: CookieService) {
  }
  ngOnInit() {
    this.route.data.pipe(map( data => data.articleDetailResolve)).subscribe(
      data => {
        if(data){
          this.isLoad = true;
          this.articleDetail = data;
          PANEL.id = this.articleDetail._id;
          PANEL.auth = this.articleDetail.articleAuth.toString();
          this.cookie.set('article_id',`${this.articleDetail._id}`);
          this.cookie.set('articleAuth',`${this.articleDetail.articleAuth.toString()}`);
        }else{
          this.isLoad = false;
        }
      }
    )
  }

}
