import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArticleDetail} from "../data-types/article";
import {API_CONFIG, ServicesModule} from "../services.module";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: ServicesModule
})
export class ArticleService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  getArticleDetail(id: string,auth:string): Observable<ArticleDetail>{
    const params = new HttpParams().set('id', id).set('articleAuth',auth);
    const url = this.uri + 'article';
    return this.http.get(url, {params}).pipe(
      map((data:any)=> {
        return {_id:data._id,title:data.title,language:data.language,
          public:data.public,content:data.content,createDate:data.createDate,articleAuth:data.auth};
      })
    )
  }
}
