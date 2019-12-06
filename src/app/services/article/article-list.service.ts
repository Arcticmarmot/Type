import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Article} from "../data-types/article";
import {API_CONFIG, ServicesModule} from "../services.module";

@Injectable({
  providedIn: ServicesModule
})
export class ArticleListService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }
  getArticleList(): Observable<{articles:Article[],authArticles:Article[],authorized:boolean}>{
    // @ts-ignore
    return this.http.get(this.uri + 'open');
  }
}
