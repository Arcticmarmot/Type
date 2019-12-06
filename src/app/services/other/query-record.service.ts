import {Inject, Injectable} from '@angular/core';
import {API_CONFIG} from "../services.module";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QueryRecordService {
  constructor(@Inject(API_CONFIG) private uri: string,private http: HttpClient ) { }

  getRecordByQuery(dateRange):Observable<any>{
    return this.http.post(this.uri+'record_detail',{dateRange:dateRange});
  }
}
