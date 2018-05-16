import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  api:string = 'http://localhost:57234/api/';
  
  constructor(private http:HttpClient) { }
  
  get<T>(url:string):Observable<any>{ 
    return this.http.get<any>(this.api+url);
  };
  
  post<T>(url:string, body:string):Observable<any>{
    return this.http.post<any>(this.api+url, body);
  }
  
  delete<T>(url:string):Observable<any>{
    return this.http.delete<any>(this.api+url);
  }
  
  put<T>(url:string, body:string):Observable<any>{
    return this.http.put<any>(this.api+url, body);
  }
  
}
