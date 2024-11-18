import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ContactInfo } from '../models/contact.model';  // Assuming ContactInfo is your ContactLabo model in Angular

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:8888/CONTACTLABO-SERVICE/api/contacts'; // Adjusted the base URL for your API
  private idUrl = 'http://localhost:8888/CONTACTLABO-SERVICE/api/contacts'; // Same as above for single contact access

  constructor(private http: HttpClient) {}

  addContact(contact: { idLaboratoire: any; id: null; fax: string; numTel: any; email: any }): Observable<ContactInfo> {
    return this.http.post<ContactInfo>(`${this.apiUrl}/add`, contact);
  }

  // Method to fetch all contacts
  listContacts(): Observable<ContactInfo[]> {
    return this.http.get<ContactInfo[]>(this.apiUrl);
  }

  // Method to get a contact by its ID
  getContactById(id: number): Observable<ContactInfo> {
    return this.http.get<ContactInfo>(`${this.idUrl}/${id}`);
  }

  // Method to update an existing contact
  updateContact(id: number, contact: ContactInfo): Observable<ContactInfo> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
    return this.http.put<ContactInfo>(`${this.idUrl}/update/${id}`, contact, { headers });
  }

  // Method to delete a contact by its ID
  deleteContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.idUrl}/delete/${id}`).pipe(
      tap(() => this.listContacts()) // Automatically refresh the contact list after deletion
    );
  }
}
