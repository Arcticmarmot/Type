import {Inject, Injectable} from '@angular/core';
import {API_CONFIG} from "../services.module";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TypingResult} from "../data-types/article";

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  constructor(@Inject(API_CONFIG) private uri: string,private http: HttpClient ) { }

  postResult(tr:TypingResult):Observable<any>{
    // @ts-ignore
    return this.http.post(this.uri+'result',tr);
  }
  getResult():Observable<any>{
    // @ts-ignore
    return this.http.get(this.uri+'result');
  }
}
