import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyse } from '../models/analyse';

@Injectable({
  providedIn: 'root',
})
export class AnalyseService {
  private apiUrl = 'http://localhost:8888/ANALYSE-SERVICE/api/analyses';

  constructor(private http: HttpClient) {}

  createAnalyse(analyseData: any): Observable<any> {
    return this.http.post(
      'http://localhost:8888/ANALYSE-SERVICE/api/analyses/addAnalyse',
      analyseData
    );
  }
  getAnalyses(): Observable<analyse> {
    return this.http.get<analyse>(
      'http://localhost:8888/ANALYSE-SERVICE/api/analyses/listAnalyses'
    );
  }
}
