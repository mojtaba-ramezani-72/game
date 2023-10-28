import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Login, Register } from '../../model/User.model';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private baseUrl = 'http://localhost:8000/users';

	constructor(private http: HttpClient) {}

	register(user: Register) {
		return this.http.post<any>(this.baseUrl, user);
	}

	login(): Observable<Array<Login>> {
		return this.http.get<any>(this.baseUrl);
	}
}
