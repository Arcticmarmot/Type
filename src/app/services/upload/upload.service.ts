import {Inject, Injectable} from '@angular/core';
import {API_CONFIG} from "../services.module";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(@Inject(API_CONFIG) private uri: string,private http: HttpClient ) { }

  upload(fd:FormData):Observable<any>{
    return this.http.post(this.uri+'upload',fd)
  }
}
