import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl =
  'https://graphql-ybekqz--8080.local-credentialless.webcontainer.io/api/tutorials';

@Injectable({
  providedIn: 'root',
})
export class TutorialService {
  headers = new HttpHeaders().set(
    'access-control-allow-origin',
    'https://graphql-ybekqz--8080.local-credentialless.webcontainer.io/'
  );

  constructor(private http: HttpClient) {}

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(baseUrl, {
      headers: this.headers,
    });
  }

  get(id: any): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${baseUrl}/${id}`, {
      headers: this.headers,
    });
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data, {
      headers: this.headers,
    });
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data, {
      headers: this.headers,
    });
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`, {
      headers: this.headers,
    });
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl, {
      headers: this.headers,
    });
  }

  findByTitle(title: any): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`, {
      headers: this.headers,
    });
  }
}
