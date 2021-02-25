import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  basePointForAuth: string = "auth"
  constructor(private httpService: HttpService) { }

  login(data: any): Observable<any> {
    return this.httpService.postRequest(this.basePointForAuth + "/login/", data)
  }

  register(data: any): Observable<any> {
    return this.httpService.postRequest(this.basePointForAuth + "/register/", data)
  }

}
