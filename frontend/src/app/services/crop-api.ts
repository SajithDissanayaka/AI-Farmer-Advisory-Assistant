
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Crop } from '../models/crop.model';

export interface CropListResponse {
  total: number;
  crops: Crop[];
}

@Injectable({
  providedIn: 'root'
})
export class CropApi {

  private http = inject(HttpClient);

  private readonly apiUrl =
    'http://127.0.0.1:8000/api/crops';

  getAllCrops(): Observable<CropListResponse> {
    return this.http.get<CropListResponse>(
      this.apiUrl
    );
  }

  getCropById(id: string): Observable<Crop> {
    return this.http.get<Crop>(
      `${this.apiUrl}/${encodeURIComponent(id)}`
    );
  }
}
