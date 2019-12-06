import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {ArticleDetail} from "../../services/data-types/article";
import {Observable, of} from "rxjs";
import {ArticleService} from "../../services/article/article.service";
import {catchError} from "rxjs/operators";
import {NzMessageService} from "ng-zorro-antd";

@Injectable({
  providedIn: 'root'
})
export class ArticleResolveService implements Resolve<ArticleDetail>{

  constructor(private articleService: ArticleService,
              private route:Router,
              private message:NzMessageService) { }

  resolve(activatedRoute: ActivatedRouteSnapshot): Observable<any>{
    const id = activatedRoute.paramMap.get('id');
    const articleAuth = activatedRoute.paramMap.get('articleAuth');
    return this.articleService.getArticleDetail(id,articleAuth).pipe(
      catchError(err => {
        if (err.error.text) {
          this.message.error(err.statusText);
        }
        return of(null);
      })
    )
  }
}
