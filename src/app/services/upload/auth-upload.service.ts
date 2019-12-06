import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {API_CONFIG} from "../services.module";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthUploadService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  authAdmin(password):Observable<any>{
    const params = new HttpParams().set('password', password);
    return this.http.get(this.uri+'auth_admin',{params}).pipe(
      map((data:{authorize:boolean}) => data.authorize)
    );
  }
  authUpload(fd:FormData):Observable<any>{
    return this.http.post(this.uri+'auth_upload',fd);
  }
}
