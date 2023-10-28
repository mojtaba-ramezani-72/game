import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Question} from './model/question.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUrl = 'http://localhost:8000/questions';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Question[]> {
    return this.http.get<any>(this.baseUrl);
  }

  get(id: string): Observable<Question> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  create(question: Question) {
    return this.http.post<any>(this.baseUrl, question);
  }

  update(id: string, question: Question): Observable<Question> {
    return this.http.put<any>(this.baseUrl + '/' + id, question);
  }

  delete(id: string) {
    return this.http.delete<any>(this.baseUrl + '/' + id);
  }
}
