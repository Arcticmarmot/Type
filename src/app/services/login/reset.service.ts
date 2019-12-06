import {Inject, Injectable} from '@angular/core';
import {API_CONFIG} from "../services.module";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserRegister} from "../data-types/user";

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(@Inject(API_CONFIG) private uri: string,private http: HttpClient ) { }

  reset(user: UserRegister):Observable<any>{
    return this.http.post(this.uri+'reset',user)
  }
}
