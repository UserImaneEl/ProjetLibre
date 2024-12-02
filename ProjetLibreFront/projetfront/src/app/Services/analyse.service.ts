import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { analyse } from '../models/analyse';

@Injectable({
  providedIn: 'root',
})
export class AnalyseService {
  updateAnalyse(analyse: analyse): Observable<any> {
    console.log(analyse.id);
    return this.http.post<any>(
      'http://localhost:8888/ANALYSE-SERVICE/api/analyses/updateAnalyse',
      analyse
    );
  }
  getAnalyseById(analysisId: number): Observable<analyse> {
    return this.http.get<analyse>(
      'http://localhost:8888/ANALYSE-SERVICE/api/analyses/' + analysisId
    );
  }
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
  getAnalysesByNom(nom: string): Observable<analyse[]> {
    return this.http.get<analyse[]>(
      'http://localhost:8888/ANALYSE-SERVICE/api/analyses/getByNom/' + nom
    );
  }
  getAnalysesByType(type: string): Observable<analyse[]> {
    return this.http.get<analyse[]>(
      'http://localhost:8888/ANALYSE-SERVICE/api/analyses/getByType/' + type
    );
  }
  deleteAnalyse(analyse: analyse): Observable<any> {
    return this.http.delete<any>(
      'http://localhost:8888/ANALYSE-SERVICE/api/analyses/deleteAnalyse/' +
        analyse.id
    );
  }
}
