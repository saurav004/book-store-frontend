import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public postRequest(url: any, data: any): any {
    return this.http.post(this.baseUrl + url, data);
  }

  public deleteRequest(url: any): any {
    return this.http.delete(this.baseUrl + url);
  }

  public getRequest(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url);
  }

  public putRequest(url, data) {
    return this.http.put(this.baseUrl + url, data);
  }

}
