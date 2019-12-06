import {Inject, Injectable} from '@angular/core';
import {API_CONFIG} from "../services.module";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../data-types/user";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(@Inject(API_CONFIG) private uri: string,private http: HttpClient ) { }

  getProfile():Observable<User>{
    // @ts-ignore
    return this.http.get(this.uri+'profile');
  }

  postProfile(data): Observable<any>{
    return this.http.post(this.uri+'profile',data);
  }
}
