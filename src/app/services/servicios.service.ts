import { Injectable } from '@angular/core';
import { from, Observable,throwError } from 'rxjs';
import{HttpClient,HttpHeaders}from '@angular/common/http';
import{retry,catchError}from'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
urlPaises='https://restcountries.eu/rest/v2/all';
urlPeru='https://restcountries.eu/rest/v2/name/peru?fullText=true';
urlPost='https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

 // httpOptions={
   // headers:new HttpHeaders({"Content-Type":"application/json"})
 // }

  getPais(){
    return this.http.get(this.urlPaises);
        
  }
  getPeru(){
    return this.http.get(this.urlPeru);
  }

  getPostu(){
    return this.http.get(this.urlPost);
  }

}
