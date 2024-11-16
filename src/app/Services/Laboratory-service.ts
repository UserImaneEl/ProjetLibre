import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Laboratoire } from '../models/laboratoire.model';

@Injectable({
  providedIn: 'root',
})
export class LaboratoireService {
  private apiUrl = 'http://localhost:8888/LABO-SERVICE/api/labos/addLabo';
  private idUrl = 'http://localhost:8888/LABO-SERVICE/api/labos';


  // BehaviorSubject pour suivre la liste des laboratoires
  private labosSubject = new BehaviorSubject<Laboratoire[]>([]);
  labos$ = this.labosSubject.asObservable();
  
  constructor(private http: HttpClient) {}

  createLaboratoire(labo: Laboratoire): Observable<any> {
    return this.http.post<any>(this.apiUrl, labo);
  }

  listLabos(): Observable<Laboratoire[]> {
    return this.http.get<Laboratoire[]>('http://localhost:8888/LABO-SERVICE/api/labos').pipe(
      tap((data) => {
        this.labosSubject.next(data); // Met à jour le BehaviorSubject avec les nouveaux labos
      })
    );
  }
  

  getLaboById(id: number): Observable<any> {
    return this.http.get(`${this.idUrl}/${id}`);
  }
  
  
  updateLabo(id: number, labo: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.put(`${this.idUrl}/${id}`, labo, { headers });
  }

  deleteLabo(id: number): Observable<any> {
    return this.http.delete(`${this.idUrl}/delete/${id}`).pipe(
      tap(() => this.listLabos()) // Recharger les laboratoires après suppression
    );
  }
  
}
