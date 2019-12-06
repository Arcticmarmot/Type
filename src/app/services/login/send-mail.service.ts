import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from "../services.module";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: ServicesModule
})
export class SendMailService {

  constructor(@Inject(API_CONFIG) private uri: string,private http: HttpClient ) { }

  send(email: string): Observable<any>{
    return this.http.post(this.uri+'send',{email:email});
  }
}
