import { Injectable,OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { BnLoggerService, BnLogSource } from "@binom/sdk-core/logger";

@Injectable({ providedIn: 'root' })
export class BnApiService {
  private apiUrl:string = '';
  private phpPostMode:boolean = false;

  protected logSource: BnLogSource = { module: 'BnApiService', source: 'svc' };
  
  constructor(
    private http: HttpClient,
    private logger:BnLoggerService
  ) {
      const baseUrl = window.location.origin;
      window.location.hostname === 'localhost' ? this.apiUrl = 'http://localhost:8000/api/' :  this.apiUrl = `${baseUrl}/api/`;
   }

  setApiUrl(url:string){ this.apiUrl = url; }
  setPhpPostMode(onOff:boolean){ this.phpPostMode = onOff; }

  getApiUrl() {return this.apiUrl }

  private formatErrors(error: any) { return  throwError(() => error.error);}

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.apiUrl}${path}`, { params:params })
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: any = {}): Observable<any> {
    let vals = this.postMode(body)
    return this.http.put(`${this.apiUrl}${path}`, vals.data, vals.options ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any = {}): Observable<any> {
    let vals = this.postMode(body)
    return this.http.post(`${this.apiUrl}${path}`, vals.data, vals.options).pipe(catchError(this.formatErrors));
  }

  delete(path: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}${path}`).pipe(catchError(this.formatErrors));
  }

  getCaptcha(){
    return this.http.get(`${this.apiUrl.replace('api/','')}captcha`)
    .pipe(catchError(this.formatErrors));
  }

  private postMode(data:any){
    let options!:any;
    if(this.phpPostMode){
      let newbody = new URLSearchParams();
      for(let key in data){ newbody.set(key, data[key]) }
      options = { headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded') };

      return {
        data: newbody.toString(),
        options: options
      }
   } else {
     return {
       data: JSON.stringify(data),
       options: {}
     }
   }
  }
}
