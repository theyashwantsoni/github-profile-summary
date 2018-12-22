import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";
// import "rxjs/add/observable/throw";
// import { BehaviorSubject } from "rxjs";
// import { Http } from "@angular/http";
// import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  private baseUrl: string = 'https://api.github.com/users/';
  constructor(private http: HttpClient) { }
  private baseurl2:string = 'https://api.github.com/';
  searchval(param: any): Observable<any> {

    var url2 = `${this.baseUrl}${param}`;

    return this.http.get<any>(url2).pipe(
      map((res: any) => {
            return res;
      }),
      catchError(err => {
        return err.json();
      })
    );
  }
  findrepo(param: any): Observable<any> {



    var url2 = `${this.baseUrl}${param}${'/repos'}`;

    return this.http.get<any>(url2).pipe(
      map((res: any) => {
            return res;
      }),
      catchError(err => {
        return err.json();
      })
    );
  }
  allskills(param: any): Observable<any> {


    var url2 = `${param}`;

    return this.http.get<any>(url2).pipe(
      map((res: any) => {
            return res;
      }),
      catchError(err => {
        return err.json();
      })
    );
  }
}
