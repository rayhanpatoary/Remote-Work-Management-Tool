import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private baseUrl = '/api/home';
  constructor(private http: HttpClient) { }
  public getMessage(): Observable<any> {
    return this.http.get<any>(this.baseUrl);
  }
}
