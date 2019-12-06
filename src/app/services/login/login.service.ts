import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from "../services.module";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserLogin} from "../data-types/user";

@Injectable({
  providedIn: ServicesModule
})
export class LoginService {

  constructor(@Inject(API_CONFIG) private uri: string,@Inject(HTTP_INTERCEPTORS) private interceptor,private http: HttpClient ) {
  }

  login(user:UserLogin):Observable<any>{
    return this.http.post(this.uri+'login',{email:user.email,password:user.password})
  }
}

