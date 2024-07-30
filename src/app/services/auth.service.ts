import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../models/user.model";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.LOCAL_URL;

  constructor(private http: HttpClient) { }

  register(user: UserModel): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/register`, user);
  }

  login(loginRequest: UserModel): Observable<any>{
    return this.http.post(`${this.apiUrl}/api/login`, loginRequest)
  }
}

