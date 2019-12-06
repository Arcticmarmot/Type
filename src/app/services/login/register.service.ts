import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from "../services.module";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserRegister} from "../data-types/user";

@Injectable({
  providedIn: ServicesModule
})
export class RegisterService {

  constructor(@Inject(API_CONFIG) private uri: string,private http: HttpClient ) { }

  register(user: UserRegister):Observable<any>{
    return this.http.post(this.uri+'register',user)
  }
}
