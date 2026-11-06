import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


export interface HealthResponse {
  status: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class Api {
  private http = inject(HttpClient);

  private apiUrl = 'http://127.0.0.1:8000/api'; // Replace with your backend API URL

  getHealth(): Observable<HealthResponse>{
    return this.http.get<HealthResponse>(`${this.apiUrl}/health`);
  }
}
