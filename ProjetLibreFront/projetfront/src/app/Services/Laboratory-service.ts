import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Laboratoire } from '../models/laboratoire.model';

@Injectable({
  providedIn: 'root',
})
export class LaboratoireService {
  private apiUrl = 'http://localhost:8888/LABO-SERVICE/api/labos/addLabo';

  constructor(private http: HttpClient) {}

  createLaboratoire(labo: Laboratoire): Observable<any> {
    return this.http.post<any>(this.apiUrl, labo);
  }
  listLabos(): Observable<Laboratoire[]> {
    return this.http.get<Laboratoire[]>(
      'http://localhost:8082/api/labos/labos'
    );
  }
}
