import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Register } from "../../model/User.model";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/users';

  constructor(private http: HttpClient) {}

  register(user: Register) {
    return this.http.post<any>(this.baseUrl, user);
  }

  login({ email, password }: Login): Observable<Login> {
    return this.http.get<any>(`${this.baseUrl}?password=${password}&email=${email}`);
  }

}
