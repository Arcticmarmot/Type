import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {API_CONFIG} from "../services.module";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  authorize():Observable<boolean>{
    return this.http.get(this.uri+'authorize').pipe(
      map((data: {authorize:boolean}) => data.authorize)
    );
  }
}
