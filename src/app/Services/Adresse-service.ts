import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Laboratoire } from '../models/laboratoire.model';
import { Adresse } from '../models/adresse.model';

@Injectable({
  providedIn: 'root',
})
export class AdresseService {
  private apiUrl = 'http://localhost:8888/ADRESSE-SERVICE/api/adresses/addAdresse';
  private idUrl = 'http://localhost:8888/ADRESSE-SERVICE/api/adresses';
  
  constructor(private http: HttpClient) {}

  createAdresse(adresse: Adresse): Observable<any> {
    return this.http.post<any>(this.apiUrl, adresse);
  }

  listAdresses(): Observable<Adresse[]> {
    return this.http.get<Adresse[]>(
      'http://localhost:8888/ADRESSE-SERVICE/api/adresses'
    );
  }
  

  getAdresseById(id: number): Observable<any> {
    return this.http.get(`${this.idUrl}/${id}`);
  }
  
  
  updateAdresse(id: number, addresse: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.put(`${this.idUrl}/${id}`, addresse, { headers });
  }

  deleteAdresse(id: number): Observable<any> {
    return this.http.delete(`${this.idUrl}/delete/${id}`).pipe(
      tap(() => this.listAdresses()) 
    );
  }
  
}
