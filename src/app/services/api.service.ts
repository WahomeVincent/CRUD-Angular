import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})

export class ApiService {

  private baseUrl = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }


  getFruits(): Observable<any> {
    return this.http.get(`${this.baseUrl}/fruits`);
  }

  getFruit(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/fruit/${id}`);
  }

  addFruit(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/addFruit`, data);
  }

  updateFruit(id: number, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateFruit/${id}`, data);
  }

  deleteFruit(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteFruit/${id}`);
  }
}
