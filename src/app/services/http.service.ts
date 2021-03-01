import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token = localStorage.getItem('token');

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public post(url: any, data: any): Observable<any> {
    return this.http.post(this.baseUrl + url, data, { observe: 'response' });
  }

  public delete(url: any): Observable<any> {
    return this.http.delete(this.baseUrl + url);
  }

  public get(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url, { observe: "response" as "response" });
  }

  public put(url: string, data: any): Observable<any> {
    return this.http.put(this.baseUrl + url, data);
  }


  public getRequestWithToken(url: string): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization', this.token)
    return this.http.get(this.baseUrl + url, { headers });
  }

  public postWithToken(url: any, data: any): Observable<any> {
    const headers = new HttpHeaders().set(
      'Authorization', this.token)
    return this.http.post(this.baseUrl + url, data, { observe: 'response', headers });
  }
}
