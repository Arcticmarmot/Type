import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {API_CONFIG} from "../services.module";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DeleteArticleService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  deleteArticle(id:string):Observable<any>{
    const params = new HttpParams().set('id',id);
    return this.http.delete(this.uri+'delete',{params});
  }
}
